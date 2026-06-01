{QUERY_DATA_FUNCTION}

import streamlit as st
import streamlit.components.v1 as components
import httpx

st.set_page_config(
    page_title="Data Apps @ Keboola",
    page_icon="🎈",
    layout="wide",
    initial_sidebar_state="collapsed",
)

st.markdown(
    """<style>
    [data-testid="stHeader"] {display: none !important;}
    [data-testid="stToolbar"] {display: none !important;}
    [data-testid="stDecoration"] {display: none !important;}
    [data-testid="stSidebar"] {display: none !important;}
    .stApp {padding: 0 !important;}
    .main .block-container {padding: 0 !important; max-width: 100vw !important;}
    .stMainBlockContainer {padding: 0 !important; max-width: none !important;}
    iframe {border: none !important; width: 100% !important; display: block;}
    footer {display: none !important;}
    .stAppViewBlockContainer { padding: 0 !important; }
    </style>""",
    unsafe_allow_html=True,
)

PRESENTATION_URL = "https://raw.githubusercontent.com/keboola-rnd/data-apps-event-presentation/main/deploy/presentation.html"

@st.cache_data(ttl=300, show_spinner=False)
def load_presentation() -> str:
    with httpx.Client(timeout=30.0, follow_redirects=True) as client:
        resp = client.get(PRESENTATION_URL)
        resp.raise_for_status()
        return resp.text

try:
    html = load_presentation()
    components.html(html, height=1080, scrolling=False)
except Exception as exc:
    st.error(f"Failed to load presentation: {exc}")
    st.markdown(f"Direct link: [{PRESENTATION_URL}]({PRESENTATION_URL})")

import reflex as rx
import WebPrueba.styles.styles as styles
import WebPrueba.constans as constants
from WebPrueba.styles.styles import TextColor
from WebPrueba.components.button import button


def instructions() -> rx.Component:
    return rx.box(
        rx.vstack(
            rx.text(
                "¿Cómo funciona el evento?",
                class_name="title",
                color=TextColor.ACCENT.value,
            ),
            rx.span(
                "* Del 1 al 24 de diciembre descubiré cada día un nuevo regalo en el calendario."
            ),
            rx.span(
                "* Puedes participar desde cualquier parte del mundo.",
            ),
            rx.span(
                "* Solo tendrás que hacer Retweet a la publicación que enlazaré desde esta web. T cuenta de Twitter/X tiene que ser pública."
            ),
            button(
                "Twitter",
                constants.TWITTER_URL,
            ),
            rx.span(
                "* Al día siguiente realizaré el sorteo de forma pública en directo desde Twitch y compartiré el ganador en la web y en Twitter/X. En caso de que no pueda hacer directo, publicaré un video con el resultado del sorteo.",
            ),
            button(
                "Twitch",
                constants.TWITCH_URL,
            ),
            rx.span(
                "* ¡Vuelta a empezar! Publicaré un nuevo regalo y comenzará de nuevo el proceso."
            ),
            class_name="nes-container is-dark with-title",
            align_items="start",
            width="100%",
        ),
        style=styles.max_width_style,
    )

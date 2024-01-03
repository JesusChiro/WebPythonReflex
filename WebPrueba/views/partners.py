import reflex as rx
import WebPrueba.styles.styles as styles
from WebPrueba.styles.styles import Size, Color
from WebPrueba.components.header_text import header_text


def partners() -> rx.Component:
    return rx.vstack(
        rx.vstack(
            header_text(
                "star",
                "Patrocinado por",
                False,
            ),
            rx.text(
                "Con el apoyo de la comunidad y los patrocinadores costearé los 24 regalos. Imagínate tu logo aquí y en todas las comunicaciones diarias durante el evento."
            ),
            rx.span(
                "¿Quieres apoyar esta iniciativa? Escríbeme a jesus_chiroque@gmail.com o envíame un mensaje en redes sociales ¡Gracias!"
            ),
            spacing=Size.BIG.value,
            padding_y=Size.VERY_BIG.value,
            style=styles.max_width_style,
        ),
        bg=Color.ACCENT.value,
        width="100%",
    )

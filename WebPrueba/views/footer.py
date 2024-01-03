import reflex as rx
import WebPrueba.styles.styles as styles
import WebPrueba.constans as constants
from WebPrueba.styles.styles import Size, TextColor


def footer() -> rx.Component:
    return rx.hstack(
        rx.vstack(
            rx.text(
                "Web de One Piece por un fan",
                font_size=Size.MEDIUM.value,
                margin_bottom=Size.SMALL.value,
            ),
            rx.link(
                "Creado con ",
                rx.box(class_name="nes-icon is-small heart"),
                " y gracias a ti por Jesus Chiroque",
                href=constants.LINK_URL,
                is_external=True,
                font_size=Size.MEDIUM.value,
                color=TextColor.TERTIARY.value,
            ),
            align_items="start",
            spacing=Size.MEDIUM.value,
            color=TextColor.TERTIARY.value,
        ),
        rx.spacer(),
        rx.image(
            src="simbolomugi.png",
            alt="Logo de los sombrero de paja",
            class_name="nes-avatar is-large",
        ),
        padding_bottom=Size.BIG.value,
        style=styles.max_width_style,
        align_items="center",
    )

import reflex as rx
import datetime
import WebPrueba.constans as constants
import WebPrueba.styles.styles as styles
from WebPrueba.styles.styles import Size, Color, TextColor
from WebPrueba.components.header_text import header_text
from WebPrueba.components.button import button


def author() -> rx.Component:
    return rx.vstack(
        header_text(
            "like",
            "Hola, mi nombre es Jesus",
        ),
        rx.flex(
            rx.avatar(
                name="One Piece",
                size="2xl",
                src="avatarOP.jpg",
                bg=Color.PRIMARY.value,
                padding="2px",
                border="4px",
                border_color=Color.SECONDARY.value,
                margin_right=Size.SMALL.value,
                margin_bottom=Size.SMALL.value,
            ),
            rx.vstack(
                rx.span(
                    f"Soy estudiante de ingeniería de sistemas desde hace mas de {experience()} años."
                ),
                rx.span(
                    "En 2018 comencé a divulgar contenido sobre programación y desarrollo de software en redes sociales como ",
                    rx.span(
                        "@jesus123",
                        color=TextColor.ACCENT.value,
                        font_size=Size.DEFAULT.value,
                    ),
                    ".",
                ),
                author_buttons(),
                width="100%",
                align_items="start",
            ),
            align_items="start",
            spacing=Size.BIG.value,
            direction=styles.FLEX_DIRECTION,
        ),
        style=styles.max_width_style,
    )


def author_buttons() -> rx.Component:
    return rx.box(
        button(
            "YouTube",
            constants.YOUTUBE_URL,
        ),
        button(
            "Twitch",
            constants.TWITCH_URL,
        ),
        button(
            "Discord",
            constants.DISCORD_URL,
        ),
    )


def experience() -> int:
    return datetime.date.today().year - 2010

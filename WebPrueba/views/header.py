import reflex as rx
import WebPrueba.styles.styles as styles
import WebPrueba.constans as constans
from WebPrueba.styles.styles import Size, TextColor


def header() -> rx.Component:
    return rx.vstack(
        rx.heading(
            "One Piece 2023",
            size="md",
            padding_bottom=Size.DEFAULT.value,
        ),
        rx.flex(
            rx.image(
                src="luffy.png",
                alt="luffy sempai",
                width="19em",
                height="22em",
                margin_right=Size.BIG.value,
            ),
            rx.vstack(
                rx.box(
                    rx.text("Luffy el nuevo rey de los piratas"),
                    rx.text(
                        "One Piece, anime que desarrolla la historia de piratas tras el tesoro dejado por el rey de los Piratas"
                    ),
                    class_name="nes-balloon from-left is-dark",
                ),
                rx.span(
                    "En el arco de Wano, Monkey D. Luffy adquiere una nueva transformación ",
                    rx.span(
                        "Gear 5: Modelo Nika",
                        color=TextColor.ACCENT.value,
                        font_size=Size.DEFAULT.value,
                    ),
                    "!",
                ),
                rx.span(
                    "Donde su poder se limita solo a su imaginación.",
                ),
                rx.span(
                    "Podrá salvar Luffy a Wano y derrotar a Kaido?",
                ),
                rx.link(
                    "#gear5",
                    href=constans.GEAR5,
                    is_external=True,
                    color=TextColor.TERTIARY.value,
                    padding_top=Size.BIG.value,
                    font_size=Size.MEDIUM.value,
                ),
                align_items="start",
            ),
            flex_direction=["column", "column", "column", "row", "row"],
        ),
        padding_top=Size.VERY_BIG.value,
        style=styles.max_width_style,
    )

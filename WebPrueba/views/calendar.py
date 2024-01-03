import reflex as rx
import WebPrueba.constans as constants
import WebPrueba.styles.styles as styles
from WebPrueba.components.header_text import header_text
from WebPrueba.components.button import button
from WebPrueba.components.day import day
from WebPrueba.styles.styles import Size


def calendar() -> rx.Component:
    return rx.vstack(
        header_text(
            "heart",
            "Calendar de aDEViento",
        ),
        rx.vstack(
            rx.hstack(
                rx.text("El evento comienza en "),
                rx.text(id="countdown"),
                align_items="start",
            ),
            button("Recordar", constants.DISCORD_EVENT_URL),
            rx.span(
                "* Los regalos son sorpresa, permanecerán ocultos hasta el día de la su publicación. No olvides pasarte por aqupi cada día para descubrir un nuevo sorteo."
            ),
            class_name="nes-container is-dark with-title",
            align_items="start",
            width="100%",
        ),
        rx.responsive_grid(
            rx.foreach(
                list(range(1, 25)),
                lambda number: day(number),
            ),
            columns=[3, 3, 4, 5, 6],
            spacing=Size.DEFAULT.value,
            width="100%",
            padding_top=Size.BIG.value,
        ),
        rx.script(src="/js/countdown.js"),
        style=styles.max_width_style,
    )

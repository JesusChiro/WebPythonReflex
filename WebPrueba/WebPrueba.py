import reflex as rx
import WebPrueba.styles.styles as styles
from WebPrueba.styles.styles import Size
from WebPrueba.views.navbar import navbar
from WebPrueba.views.header import header
from WebPrueba.views.instructions import instructions
from WebPrueba.views.calendar import calendar
from WebPrueba.views.author import author
from WebPrueba.views.footer import footer
from WebPrueba.components.github import github
from WebPrueba.views.partners import partners


def index() -> rx.Component:
    return rx.box(
        rx.script(src="/js/snow.js"),
        navbar(),
        rx.center(
            rx.vstack(
                header(),
                instructions(),
                calendar(),
                author(),
                partners(),
                footer(),
                github(),
                width="100%",
                spacing=Size.VERY_BIG.value,
            )
        ),
    )


app = rx.App(
    stylesheets=styles.STYLESSHEET,
    style=styles.BASE_STYLE,
)

app.add_page(
    index,
    title="Calendario de aDEViento 2023 | 24 dias. 24 regalos.",
    description="Por tercer año, ¡aquí el calendario de adviento sorpresa de nuestra comunidad",
)

app.compile()


/** @jsxImportSource @emotion/react */import { Fragment, useRef } from "react"
import { Fragment_fd0e7cb8f9fb4669a6805377d925fba0 } from "/utils/stateful_components"
import { Avatar, Box, Button, Center, Flex, Heading, HStack, Image as ChakraImage, Link, SimpleGrid, Spacer, Text, VStack } from "@chakra-ui/react"
import Script from "next/script"
import "focus-visible/dist/focus-visible"
import NextLink from "next/link"
import { isTrue, refs } from "/utils/state"
import NextHead from "next/head"



export function Simplegrid_ced220ebb8310dbed5d49eaa22bf5ca6 () {


  return (
    <SimpleGrid columns={[3, 3, 4, 5, 6]} spacing={`1em`} sx={{"width": "100%", "paddingTop": "2em"}}>
  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24].map((number, index_e890d59f286a5d41dc62a874d47465d8) => (
  <Box key={index_e890d59f286a5d41dc62a874d47465d8} sx={{"bg": "#EA5940", "width": "100%", "aspectRatio": "1", "position": "relative"}}>
  <Fragment>
  {isTrue(false) ? (
  <Fragment>
  <Link as={NextLink} href={``} isExternal={true} sx={{"position": "absolute"}}>
  <ChakraImage alt={`Regalo asociado al día ${number}`} src={`gift.png`}/>
</Link>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  <Fragment>
  {isTrue(true) ? (
  <Fragment>
  <ChakraImage alt={`Regalo asociado al día ${number}`} src={`gift.png`} sx={{"position": "absolute"}}/>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  <Text sx={{"padding": "1em", "position": "absolute"}}>
  {number}
</Text>
</Box>
))}
</SimpleGrid>
  )
}

export default function Component() {
  const ref_countdown = useRef(null); refs['ref_countdown'] = ref_countdown;

  return (
    <Fragment>
  <Fragment_fd0e7cb8f9fb4669a6805377d925fba0/>
  <Box>
  <Script src={`/js/snow.js`} strategy={`afterInteractive`}/>
  <VStack sx={{"bg": "#212529", "position": "sticky", "borderBottom": "0.25em solid #D3D3D3", "paddingX": "2em", "paddingY": "1em", "zIndex": "999", "top": "0"}}>
  <HStack sx={{"width": "100%"}}>
  <ChakraImage alt={`Imagen navideña`} src={`sombreromugi.png`} sx={{"width": "4em", "height": "4em"}}/>
  <Text>
  {`aDEViento 2023`}
</Text>
  <Spacer/>
  <Link as={NextLink} className={`nes-icon youtube is-medium`} href={`https://www.youtube.com/@jesusdaniel5553`} isExternal={true} sx={{"textDecoration": "none", "_hover": {"color": "#EA5940", "textDecoration": "none"}}}>
  {``}
</Link>
  <Link as={NextLink} className={`nes-icon twitch is-medium`} href={`https://www.twitch.tv/jesuschiroque1993`} isExternal={true} sx={{"textDecoration": "none", "_hover": {"color": "#EA5940", "textDecoration": "none"}}}>
  {``}
</Link>
  <Link as={NextLink} className={`nes-icon github is-medium`} href={`https://github.com/jesus123`} isExternal={true} sx={{"textDecoration": "none", "_hover": {"color": "#EA5940", "textDecoration": "none"}}}>
  {``}
</Link>
</HStack>
</VStack>
  <Center>
  <VStack spacing={`4em`} sx={{"width": "100%"}}>
  <VStack sx={{"alignItems": "center", "paddingX": "2em", "width": "100%", "maxWidth": "1000PX", "paddingTop": "4em"}}>
  <Heading size={`md`} sx={{"paddingBottom": "1em", "fontFamily": "Press Start 2P", "color": "#EA5940"}}>
  {`One Piece 2023`}
</Heading>
  <Flex sx={{"flexDirection": ["column", "column", "column", "row", "row"]}}>
  <ChakraImage alt={`luffy sempai`} src={`luffy.png`} sx={{"width": "19em", "height": "22em", "marginRight": "2em"}}/>
  <VStack alignItems={`start`}>
  <Box className={`nes-balloon from-left is-dark`}>
  <Text>
  {`Luffy el nuevo rey de los piratas`}
</Text>
  <Text>
  {`One Piece, anime que desarrolla la historia de piratas tras el tesoro dejado por el rey de los Piratas`}
</Text>
</Box>
  <Text as={`span`} sx={{"fontSize": "0.8em"}}>
  {`En el arco de Wano, Monkey D. Luffy adquiere una nueva transformación `}
  <Text as={`span`} sx={{"color": "#EA5940", "fontSize": "1em"}}>
  {`Gear 5: Modelo Nika`}
</Text>
  {`!`}
</Text>
  <Text as={`span`} sx={{"fontSize": "0.8em"}}>
  {`Donde su poder se limita solo a su imaginación.`}
</Text>
  <Text as={`span`} sx={{"fontSize": "0.8em"}}>
  {`Podrá salvar Luffy a Wano y derrotar a Kaido?`}
</Text>
  <Link as={NextLink} href={`https://twitter.com/search?q=%23gear5&src=typed_query`} isExternal={true} sx={{"color": "#D3D3D3", "paddingTop": "2em", "fontSize": "0.8em", "textDecoration": "none", "_hover": {"color": "#EA5940", "textDecoration": "none"}}}>
  {`#gear5`}
</Link>
</VStack>
</Flex>
</VStack>
  <Box sx={{"alignItems": "center", "paddingX": "2em", "width": "100%", "maxWidth": "1000PX"}}>
  <VStack alignItems={`start`} className={`nes-container is-dark with-title`} sx={{"width": "100%"}}>
  <Text className={`title`} sx={{"color": "#EA5940"}}>
  {`¿Cómo funciona el evento?`}
</Text>
  <Text as={`span`} sx={{"fontSize": "0.8em"}}>
  {`* Del 1 al 24 de diciembre descubiré cada día un nuevo regalo en el calendario.`}
</Text>
  <Text as={`span`} sx={{"fontSize": "0.8em"}}>
  {`* Puedes participar desde cualquier parte del mundo.`}
</Text>
  <Text as={`span`} sx={{"fontSize": "0.8em"}}>
  {`* Solo tendrás que hacer Retweet a la publicación que enlazaré desde esta web. T cuenta de Twitter/X tiene que ser pública.`}
</Text>
  <Link as={NextLink} href={`https://twitter.com/Chiroque1993`} isExternal={true} sx={{"textDecoration": "none", "_hover": {"color": "#EA5940", "textDecoration": "none"}}}>
  <Button className={`nes-btn is-error`} sx={{"marginBottom": "1em", "height": "2.75em", "color": "#212529 !important", "_hover": {"color": "#FFFFFF !important", "textDecoration": "none"}}}>
  {`Twitter`}
</Button>
</Link>
  <Text as={`span`} sx={{"fontSize": "0.8em"}}>
  {`* Al día siguiente realizaré el sorteo de forma pública en directo desde Twitch y compartiré el ganador en la web y en Twitter/X. En caso de que no pueda hacer directo, publicaré un video con el resultado del sorteo.`}
</Text>
  <Link as={NextLink} href={`https://www.twitch.tv/jesuschiroque1993`} isExternal={true} sx={{"textDecoration": "none", "_hover": {"color": "#EA5940", "textDecoration": "none"}}}>
  <Button className={`nes-btn is-error`} sx={{"marginBottom": "1em", "height": "2.75em", "color": "#212529 !important", "_hover": {"color": "#FFFFFF !important", "textDecoration": "none"}}}>
  {`Twitch`}
</Button>
</Link>
  <Text as={`span`} sx={{"fontSize": "0.8em"}}>
  {`* ¡Vuelta a empezar! Publicaré un nuevo regalo y comenzará de nuevo el proceso.`}
</Text>
</VStack>
</Box>
  <VStack sx={{"alignItems": "center", "paddingX": "2em", "width": "100%", "maxWidth": "1000PX"}}>
  <HStack spacing={`1em`} sx={{"paddingBottom": "2.75em"}}>
  <Box className={`nes-icon is-medium heart`}/>
  <Heading size={`md`} sx={{"color": "#EA5940", "fontFamily": "Press Start 2P"}}>
  {`Calendar de aDEViento`}
</Heading>
</HStack>
  <VStack alignItems={`start`} className={`nes-container is-dark with-title`} sx={{"width": "100%"}}>
  <HStack alignItems={`start`}>
  <Text>
  {`El evento comienza en `}
</Text>
  <Text id={`countdown`} ref={ref_countdown}/>
</HStack>
  <Link as={NextLink} href={``} isExternal={true} sx={{"textDecoration": "none", "_hover": {"color": "#EA5940", "textDecoration": "none"}}}>
  <Button className={`nes-btn is-error`} sx={{"marginBottom": "1em", "height": "2.75em", "color": "#212529 !important", "_hover": {"color": "#FFFFFF !important", "textDecoration": "none"}}}>
  {`Recordar`}
</Button>
</Link>
  <Text as={`span`} sx={{"fontSize": "0.8em"}}>
  {`* Los regalos son sorpresa, permanecerán ocultos hasta el día de la su publicación. No olvides pasarte por aqupi cada día para descubrir un nuevo sorteo.`}
</Text>
</VStack>
  <Simplegrid_ced220ebb8310dbed5d49eaa22bf5ca6/>
  <Script src={`/js/countdown.js`} strategy={`afterInteractive`}/>
</VStack>
  <VStack sx={{"alignItems": "center", "paddingX": "2em", "width": "100%", "maxWidth": "1000PX"}}>
  <HStack spacing={`1em`} sx={{"paddingBottom": "2.75em"}}>
  <Box className={`nes-icon is-medium like`}/>
  <Heading size={`md`} sx={{"color": "#EA5940", "fontFamily": "Press Start 2P"}}>
  {`Hola, mi nombre es Jesus`}
</Heading>
</HStack>
  <Flex direction={["column", "column", "column", "row", "row"]} sx={{"alignItems": "start", "spacing": "2em"}}>
  <Avatar name={`One Piece`} size={`2xl`} src={`avatarOP.jpg`} sx={{"bg": "#212529", "padding": "2px", "border": "4px", "borderColor": "#D3D3D3", "marginRight": "0.5em", "marginBottom": "0.5em"}}/>
  <VStack alignItems={`start`} sx={{"width": "100%"}}>
  <Text as={`span`} sx={{"fontSize": "0.8em"}}>
  {`Soy estudiante de ingeniería de sistemas desde hace mas de 14 años.`}
</Text>
  <Text as={`span`} sx={{"fontSize": "0.8em"}}>
  {`En 2018 comencé a divulgar contenido sobre programación y desarrollo de software en redes sociales como `}
  <Text as={`span`} sx={{"color": "#EA5940", "fontSize": "1em"}}>
  {`@jesus123`}
</Text>
  {`.`}
</Text>
  <Box>
  <Link as={NextLink} href={`https://www.youtube.com/@jesusdaniel5553`} isExternal={true} sx={{"textDecoration": "none", "_hover": {"color": "#EA5940", "textDecoration": "none"}}}>
  <Button className={`nes-btn is-error`} sx={{"marginBottom": "1em", "height": "2.75em", "color": "#212529 !important", "_hover": {"color": "#FFFFFF !important", "textDecoration": "none"}}}>
  {`YouTube`}
</Button>
</Link>
  <Link as={NextLink} href={`https://www.twitch.tv/jesuschiroque1993`} isExternal={true} sx={{"textDecoration": "none", "_hover": {"color": "#EA5940", "textDecoration": "none"}}}>
  <Button className={`nes-btn is-error`} sx={{"marginBottom": "1em", "height": "2.75em", "color": "#212529 !important", "_hover": {"color": "#FFFFFF !important", "textDecoration": "none"}}}>
  {`Twitch`}
</Button>
</Link>
  <Link as={NextLink} href={`https://discord.gg/_jesusdaniel`} isExternal={true} sx={{"textDecoration": "none", "_hover": {"color": "#EA5940", "textDecoration": "none"}}}>
  <Button className={`nes-btn is-error`} sx={{"marginBottom": "1em", "height": "2.75em", "color": "#212529 !important", "_hover": {"color": "#FFFFFF !important", "textDecoration": "none"}}}>
  {`Discord`}
</Button>
</Link>
</Box>
</VStack>
</Flex>
</VStack>
  <VStack sx={{"bg": "#EA5940", "width": "100%"}}>
  <VStack spacing={`2em`} sx={{"alignItems": "center", "paddingX": "2em", "width": "100%", "maxWidth": "1000PX", "paddingY": "4em"}}>
  <HStack spacing={`1em`} sx={{"paddingBottom": "2.75em"}}>
  <Box className={`nes-icon is-medium star`}/>
  <Heading size={`md`} sx={{"color": "#212529", "fontFamily": "Press Start 2P"}}>
  {`Patrocinado por`}
</Heading>
</HStack>
  <Text>
  {`Con el apoyo de la comunidad y los patrocinadores costearé los 24 regalos. Imagínate tu logo aquí y en todas las comunicaciones diarias durante el evento.`}
</Text>
  <Text as={`span`} sx={{"fontSize": "0.8em"}}>
  {`¿Quieres apoyar esta iniciativa? Escríbeme a jesus_chiroque@gmail.com o envíame un mensaje en redes sociales ¡Gracias!`}
</Text>
</VStack>
</VStack>
  <HStack alignItems={`center`} sx={{"alignItems": "center", "paddingX": "2em", "width": "100%", "maxWidth": "1000PX", "paddingBottom": "2em"}}>
  <VStack alignItems={`start`} spacing={`0.8em`} sx={{"color": "#D3D3D3"}}>
  <Text sx={{"fontSize": "0.8em", "marginBottom": "0.5em"}}>
  {`Web de One Piece por un fan`}
</Text>
  <Link as={NextLink} href={`https://nmtelecom.pe`} isExternal={true} sx={{"fontSize": "0.8em", "color": "#D3D3D3", "textDecoration": "none", "_hover": {"color": "#EA5940", "textDecoration": "none"}}}>
  {`Creado con `}
  <Box className={`nes-icon is-small heart`}/>
  {` y gracias a ti por Jesus Chiroque`}
</Link>
</VStack>
  <Spacer/>
  <ChakraImage alt={`Logo de los sombrero de paja`} className={`nes-avatar is-large`} src={`simbolomugi.png`}/>
</HStack>
  <Link as={NextLink} href={`https://github.com/mouredev/adeviento-web`} isExternal={true} sx={{"alignItems": "end", "display": "flex", "marginTop": "0px !important", "textDecoration": "none", "_hover": {"color": "#EA5940", "textDecoration": "none"}}}>
  <VStack>
  <VStack alignItems={`start`} className={`nes-balloon from-right is-dark`} sx={{"marginBottom": "2em"}}>
  <Text as={`span`} sx={{"fontSize": "0.8em"}}>
  {`Proyecto`}
</Text>
  <Text as={`span`} sx={{"fontSize": "0.8em"}}>
  {`en Github`}
</Text>
</VStack>
  <Box className={`nes-badge`}>
  <Text as={`span`} className={`is-error`} sx={{"fontSize": "0.8em"}}>
  {`2.1.0`}
</Text>
</Box>
</VStack>
  <Box className={`nes-octocat animate`}/>
</Link>
</VStack>
</Center>
</Box>
  <NextHead>
  <title>
  {`Calendario de aDEViento 2023 | 24 dias. 24 regalos.`}
</title>
  <meta content={`Por tercer año, ¡aquí el calendario de adviento sorpresa de nuestra comunidad`} name={`description`}/>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}

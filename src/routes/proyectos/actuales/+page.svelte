<script>
	import Container from '$components/Container.svelte';
	import Icon from 'svelte-icons-pack';
	import AiOutlineHome from 'svelte-icons-pack/ai/AiOutlineHome';
	import Tarjeta from './Tarjeta.svelte';
</script>

<Container className="py-16 flex flex-wrap gap-16">
	<Tarjeta
    espejo=""
		titulo="Página web de Insomnia"
		desc="Esta es la página web de la comunidad Insomnia. Aquí se presenta la comunidad y todo lo que
			trae con ella, así como: los usuario destacados, las guías del personak, las noticias con
			anticipación, etc."
    img_src="https://autumn.revolt.chat/attachments/nYBgMq-V80htJKAenh0pZAwfnPdSfVMub-LOh-WEwm/image.png"
    img_alt="Captura de la página web de Insomnia"
		enlace="http://insomnia-sand.vercel.app"
		enlaceTexto="Ir a la página"
	>
		<Icon src={AiOutlineHome} className="ml-1" color="white" />
	</Tarjeta>
  <Tarjeta
    espejo="si"
    titulo="Cuaderno MC"
    desc="Un juego de clics basado en Minecraft y una idea de la infancia."
    img_src="https://autumn.revolt.chat/attachments/CXbbhw-Iw8RcNvvihpKNh6JMxFMgS29MO2N4QRVAVq/image.png"
    img_alt="Captura del juego Cuaderno MC"
    enlace="https://cuaderno-mc.vercel.app"
    enlaceTexto="Ir a la página"
  >
    <Icon src={AiOutlineHome} className="ml-1" color="white" />
  </Tarjeta>
  <Tarjeta
    espejo=""
    titulo="Discord de Insomnia"
    desc="La comunidad de Discord oficial de Insomnia"
    img_src="https://autumn.revolt.chat/attachments/2bXUGJYp14ebZfyLAVLdaRAS4sjwZ2l4MWTdXuamg7/image.png"
    img_alt="Captura de la comunidad de Discord de Insomnia"
    enlace="https://discord.gg/m9taHt7CMw"
    enlaceTexto="Unirse"
  >

  </Tarjeta>
</Container>

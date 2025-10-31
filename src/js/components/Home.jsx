import React from "react";
import { Navbar } from "./Navbar";
import { Card } from "./Card";
import { Footer } from "./Footer";


//HomePage
const Home = () => {
	return (
		<div>
			<Navbar name={'FamousPeopleIveMet.com'}/>
			<h1 className="d-flex justify-content-center py-5">This is where I work:</h1>
			<div className="container-fluid d-flex justify-content-center">
			<img style={{borderRadius: '10px'}} src="https://media.inmobalia.com/imgV1/B98Le8~d7M9toHMvTjgme8OZa3VM~MdHztIxQSBCr_MiEaR4WISnl6iMGI_v6MmxhkIxKokf_xGgZ72bgm~cXh6gXIA3JzumCMi33KdWThoHvpPldJz0jxaXahIGuVVNFiO5p_IK0r2bEw--.jpg" alt="" />
			</div>
			<h2 className="d-flex justify-content-center py-5"> These are the famous people I've met:</h2>
			<div className="container-fluid d-flex justify-content-center px-5">
			<Card name={'Michael Jordan'} role={'Goat'} url={'https://imageio.forbes.com/specials-images/imageserve/603811ed0f3061f16a7be88c/0x0.jpg?format=jpg&crop=1577,1578,x598,y97,safe&height=416&width=416&fit=bounds'} info={'Not bad not good, was not allowed to talk to him much. (VERY tall)'} rating={'6/10'}/>
			<Card name={'Zinedine Zidane'} role={'Legend'} url={'https://assets.realmadrid.com/is/image/realmadrid/1330190795142?$Mobile$&fit=wrap'} info={'Big aura very smooth but didnt talk much'} rating={'7/10'}/>
			<Card name={'Diogo Dalot'} role={'Active Player'} url={'https://azertag.az/files/2023/2/1200x630/168560210944325141_1200x630.jpg'} info={'Stopped straight away for a photo, propper manc accent'} rating={'8/10'}/>
			<Card name={'Carlos Tevez'} role={'Legend'} url={'https://www.infobae.com/resizer/v2/https%3A%2F%2Fs3.amazonaws.com%2Farc-wordpress-client-uploads%2Finfobae-wp%2Fwp-content%2Fuploads%2F2016%2F12%2F11183326%2Friver-boca-superclasico-1920-gol-festejo-tevez.jpg?auth=11f409418d21b33b14c88fff9b0d1ae059a2c766be5c31db3e2bf365a7c47322&smart=true&width=1200&height=1200&quality=85'} info={'Great guy very down to earth good banter'} rating={'8/10'}/>
			</div>
			<Footer/>

		</div>
	);
};

export default Home;
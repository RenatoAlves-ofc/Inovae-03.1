// Conteúdo central da landing page — separa o conteúdo da apresentação.
// Componentes importam daqui em vez de manter os dados embutidos.

import imgFull from "../assets/images/ayanokoji_full.jpg";
import imgDigital from "../assets/images/ayanokoji_digital.webp";
import heroVideo from "../assets/media/ayanokoji.mp4";

// Imagens da galeria (adicionadas pelo usuário).
import imgWhiteroom from "../assets/images/Ayanokoji_whiteroom.jpeg";
import imgChess from "../assets/images/Ayanokoji_chess.jpeg";
import imgMask from "../assets/images/Ayanokoji_mask.jpeg";
import imgUmbrella from "../assets/images/Ayanokoji_umbrella.jpeg";
import imgVsHousen from "../assets/images/Ayanokoji_vsHousen.png";

export { imgFull, imgDigital, heroVideo };

/** Itens das navegações (apenas visuais — não funcionam, por requisito). */
export const navItems = [
  "Início",
  "Sobre",
  "Habilidades",
  "Galeria",
  "Arcos",
  "Contato",
] as const;

export const footerNavItems = [...navItems, "Observação"] as const;

export const redesSociais = ["Instagram", "X", "Pinterest", "YouTube"] as const;

/**
 * Cards da galeria: título + área de imagem (placeholder por enquanto).
 * Para adicionar a imagem depois, basta preencher `img` com o import do arquivo.
 */
export interface GalleryCard {
  titulo: string;
  img?: string;
}

export const galleryCards: GalleryCard[] = [
  { titulo: "Quarto Branco", img: imgWhiteroom },
  { titulo: "Xadrez Mental", img: imgChess },
  { titulo: "A Máscara", img: imgMask },
  { titulo: "Sob a Chuva", img: imgUmbrella },
  { titulo: "Classe D", img: imgDigital },
  { titulo: "Ayanokoji vs Hōsen", img: imgVsHousen },
];

/** Citação exibida no card único da seção Bastidores. */
export const bastidoresQuote =
  "Eu nunca considerei você meu aliado. Nem você. Nem a Kushida. Nem o Hirata. " +
  "Todas as pessoas não passam de ferramentas. Não importa como é feito. " +
  "Não importa o que precisa ser sacrificado. Vencer é tudo; contanto que eu vença, " +
  "isso é tudo que importa.";

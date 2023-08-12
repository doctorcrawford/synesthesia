import radioMan from './../resources/radio-man.mp3';
import radioManPic from './../resources/radio-man.png';
import ronnieB from './../resources/ronnie-b.mp3';
import ronnieBPic from './../resources/ronnie-b.jpg';

type Track = {
  title: string;
  src: string;
  author: string;
  thumbnail?: string;
};

export const tracks: Track[] = [
  {
    title: 'Radio Man ft. An',
    src: radioMan,
    author: 'KNXN ft. An',
    thumbnail: radioManPic,
  },
  {
    title: 'Ronnie B',
    src: ronnieB,
    author: 'KNXN',
    thumbnail: ronnieBPic,
  },
]
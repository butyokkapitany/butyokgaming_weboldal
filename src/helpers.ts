export function simpleIconToHex(hexCode: string) {
	return `#${hexCode}`;
}

export type Songinfo = {
	id: number;
	coverImg: string;
	songTitle: string;
	songAlbum: string;
	songYear: number;
	songGenre: string;
	genreColorName: 'fade' | 'gray' | 'brown' | 'orange' | 'gold' | 'yellow' | 'grass' | 'green' | 'beryl' | 'teal' | 'cyan' | 'sky' | 'blue' | 'indigo' | 'violet' | 'purple' | 'fuchsia' | 'pink' | 'crimson' | 'red';
	ytLink: string;
	downloadLink: string;
};

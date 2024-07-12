import { render } from 'storyblok-rich-text-react-renderer';

export function RichTextComponent({ document }:any) {
    return <div>{render(document)}</div>;
}
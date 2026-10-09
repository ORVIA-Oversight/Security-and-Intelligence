import { oesAccent, oesFooter } from './orviaShell';

/* Shared ORVIA estate footer: Follow ORVIA widget, verified trust row, legal block. Generated markup: components/orviaShell.js */
export default function Footer(){
  return <div style={{ display:'contents', '--oes-accent': oesAccent }} dangerouslySetInnerHTML={{ __html: oesFooter }} />;
}

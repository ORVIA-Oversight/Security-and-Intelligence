import { oesAccent, oesHeader } from './orviaShell';

/* Shared ORVIA estate header (same structure as orvia.org.uk). Generated markup: components/orviaShell.js */
export default function Header(){
  return <div style={{ display:'contents', '--oes-accent': oesAccent }} dangerouslySetInnerHTML={{ __html: oesHeader }} />;
}

import PageHero from '../../components/PageHero';
import InterfacePanel from '../../components/InterfacePanel';

export const metadata={
  title:'IRIS Intelligence Technology',
  description:'IRIS coordinates evidence, HIVE provenance, VITA challenge, VERA verification and human review inside one accountable intelligence workflow.',
  alternates:{canonical:'/iris-intelligence'}
};

export default function Page(){return <>
<PageHero title="The intelligence operating layer." visual="entity">IRIS is the sole conductor. It routes work, holds context, assigns bounded specialist capability and tracks state. It does not make final findings.</PageHero>
<section className="section"><InterfacePanel/></section>
<section className="architecture-band"><div className="architecture-inner">{[
['INPUT','Evidence · records · calls · documents · systems · forms · data'],
['IRIS','Routes work · holds context · assigns specialist capability · tracks state'],
['HIVE','Evidence · versions · provenance · assertions · dissent'],
['VITA','Challenge · blind spots · alternative hypotheses · completeness'],
['HUMAN REVIEW','Judgement · authority · accountability'],
['VERA','Verification · effectiveness · sustained check'],
['OUTPUT','Briefing · report · actions · assurance record']
].map(([a,b],i)=><div className="architecture-step" key={a}><span>{String(i+1).padStart(2,'0')}</span><div><strong>{a}</strong><p>{b}</p></div></div>)}</div></section>
<section className="section editorial-split"><div><div className="eyebrow">BOUNDARIES</div><h2>IRIS coordinates. Humans decide.</h2></div><div className="editorial-copy"><p>Specialist workers can search, organise, compare, identify gaps and assist verification within bounded roles. Any new specialist must be formally registered before operational use.</p><p>IRIS is not a new autonomous “brain” and it does not replace accountable human authority.</p></div></section>
</>}
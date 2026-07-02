import { useSynthesis } from '@/hooks/useStock'

export function SynthesisCard() {
  const { data } = useSynthesis()

  return (
    <section className="card panel-card synth-card">
      <div className="card-title">{data?.title ?? 'AI Synthesis'}</div>
      <div className="synth-scroll">
        {data?.paragraphs.map((p, i) => (
          <p key={i} className="synth-para">{p}</p>
        ))}
      </div>
    </section>
  )
}

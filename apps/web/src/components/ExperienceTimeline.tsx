import React from 'react';
import { Briefcase, Brain, Code2, GraduationCap, ExternalLink } from 'lucide-react';
import TimelineScrollTrack from '@/components/TimelineScrollTrack';

interface TimelineItem {
  id: number;
  category: string;
  title: string;
  institution: string;
  location: string;
  desc: string;
  bullets?: string[];
  date: string;
  icon: React.ReactNode;
}

const timelineData: TimelineItem[] = [
  {
    id: 1,
    category: 'Work Experience',
    title: 'Senior Technical Assistant',
    institution: 'Ethiopian Defense University',
    location: 'Bishoftu, Ethiopia',
    date: '2022 to 2026',
    desc: 'Academic laboratory instruction, student software evaluation, system debugging, and technical documentation.',
    bullets: [
      'Deliver technical instruction and practical lab guidance in foundational and advanced computer engineering topics, including Object-Oriented Programming (OOP), Data Structures & Algorithms, and Computer Programming.',
      'Conduct rigorous code reviews and evaluate student software assignments to enforce clean coding standards, proper design patterns, and efficient logic.',
      'Assist in troubleshooting, debugging, and maintaining software setup across computer laboratory systems.',
      'Document technical guidelines, lab manuals, and student progress reports to ensure structured learning environments.',
    ],
    icon: <Briefcase className="w-4 h-4 shrink-0 text-accent" aria-hidden="true" />,
  },
  {
    id: 2,
    category: 'Education',
    title: 'Master of Technology in Artificial Intelligence',
    institution: 'Ethiopian Defense University',
    location: 'Bishoftu, Ethiopia',
    date: 'In Progress (2026)',
    desc: 'Master of Technology in Artificial Intelligence candidate.',
    icon: <Brain className="w-4 h-4 shrink-0 text-cool" aria-hidden="true" />,
  },
  {
    id: 3,
    category: 'Education & Training',
    title: 'Full stack Software & QA Engineering',
    institution: 'IBT Ethiopia, Advanced Digital Skills Training',
    location: 'Megenagna, Ethiopia',
    date: 'In Progress (July to now 2026)',
    desc: 'Completed the front-end phase mastering JavaScript, TypeScript, vanilla CSS, Tailwind CSS, Python, and Linux; currently progressing into the back-end phase covering Node.js, NestJS, and PostgreSQL.',
    icon: <Code2 className="w-4 h-4 shrink-0 text-ok" aria-hidden="true" />,
  },
  {
    id: 4,
    category: 'Education',
    title: 'Bachelor of Science in Computer Engineering',
    institution: 'Debre Berhan University',
    location: 'Debre Berhan, Ethiopia',
    date: 'Graduated: September 2022',
    desc: 'Undergraduate engineering degree in Computer Engineering.',
    icon: <GraduationCap className="w-4 h-4 shrink-0 text-cool" aria-hidden="true" />,
  },
];

const certifications = [
  {
    title: 'Python Programming Training',
    issuer: '4K Labs & Addis Ababa University Computer Science Department',
    year: '2023',
    url: 'https://drive.google.com/file/d/1LyPIWM6e-Y8YGgJqMXp52h4F86q6e9Tj/view?usp=drive_link',
  },
  {
    title: 'Dereja Academy Accelerator Program',
    issuer: 'Mastercard Foundation & Dereja',
    year: '2022',
    url: 'https://drive.google.com/file/d/1YCjJlpMYHyUUBKuwFGu_XAYAN_y8b4HB/view?usp=sharing',
  },
  {
    title: 'Virtual Assistant Professional Certificate',
    issuer: 'ALX',
    year: '2024',
    url: 'https://savanna.alxafrica.com/certificates/FnJ28MxcL6',
  },
];

export default function ExperienceTimeline() {
  return (
    <section id="timeline" className="section-band">
      <div className="container">
        <div className="section-head">
          <div className="space-y-3">
            <h2>Work Experience &amp; Education</h2>
            <p className="lead">Academic instruction, postgraduate research, training, and certifications.</p>
          </div>
        </div>

        <TimelineScrollTrack>
          {timelineData.map((item, idx) => (
            <li
              key={item.id}
              style={{ '--i': idx } as React.CSSProperties}
              className="trail-item"
            >
              <div className="space-y-1">
                <div className="measured text-sm">{item.date}</div>
                <div className="text-xs text-muted font-medium">{item.category}</div>
              </div>

              <div className="space-y-2 min-w-0">
                <div className="flex items-start gap-2.5">
                  <span className="mt-1 shrink-0">{item.icon}</span>
                  <h3 className="text-ink">{item.title}</h3>
                </div>
                <p className="text-sm text-accent font-medium">
                  {item.institution}, {item.location}
                </p>
                {item.bullets ? (
                  <ul className="space-y-1.5 text-sm text-muted list-disc pl-5 max-w-[65ch]">
                    {item.bullets.map((bullet, bIdx) => (
                      <li key={bIdx}>{bullet}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-muted leading-relaxed max-w-[65ch]">{item.desc}</p>
                )}
              </div>
            </li>
          ))}
        </TimelineScrollTrack>

        {/* Certifications from CV */}
        <div className="mt-12 space-y-4">
          <h3 className="text-ink">Certifications</h3>
          <div className="panels grid-cols-1 md:grid-cols-3">
            {certifications.map((cert) => (
              <div key={cert.title} className="panel-cell flex flex-col justify-between gap-4">
                <div className="space-y-1">
                  <div className="measured text-xs">{cert.year}</div>
                  <div className="text-ink font-medium">{cert.title}</div>
                  <p className="text-sm text-muted">{cert.issuer}</p>
                </div>
                <div>
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-link inline-flex items-center gap-1.5 text-sm"
                  >
                    <span>Verify certificate</span>
                    <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

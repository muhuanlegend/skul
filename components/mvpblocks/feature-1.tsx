import { IconWorld } from '@tabler/icons-react';
import {
  Code,
  Terminal,
  Paintbrush,
  Rocket,
  Book,
  PlusCircle,
  Calendar,
  GitGraphIcon,
} from 'lucide-react';

const features = [
  {
    icon: <Calendar className="h-6 w-6" />,
    title: 'Smart Administration',
    desc: 'Automate attendance, fee collection, and reports with ease. Free up hours of manual work with intelligent tools that handle routine tasks, giving you more time to focus on student success.',
  },
  {
    icon: <Terminal className="h-6 w-6" />,
    title: 'Seamless Communication',
    desc: 'Keep parents, teachers, and students connected in real time. Send instant updates, share announcements, and build a stronger school community through integrated messaging and notifications.',
  },
  {
    icon: <GitGraphIcon className="h-6 w-6" />,
    title: 'Data-Driven Insights',
    desc: 'Make smarter decisions with powerful analytics. Track academic performance, monitor trends, and get actionable insights to improve teaching quality and overall school efficiency.',
  },
  {
    icon: <Rocket className="h-6 w-6" />,
    title: ' Effortless Timetable Management',
    desc: 'Create and manage schedules in minutes. Our smart timetable generator helps you organize classes, teachers, and rooms without conflicts, ensuring smooth academic operations.',
  },
  {
    icon: <Book className="h-6 w-6" />,
    title: 'Secure Records & Storage',
    desc: 'Keep student and staff records safe and organized. All your data is securely stored in one place, easily accessible whenever you need it, with top-notch privacy protection.',
  },
  {
    icon: <IconWorld className="h-6 w-6" />,
    title: 'Online Learning Integration',
    desc: 'Blend traditional and digital learning with ease. Share assignments, upload resources, and enable virtual classes, making education accessible anytime, anywhere.',
  },
];
export default function Feature1() {
  return (
    <section className="relative py-14">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="relative mx-auto max-w-2xl sm:text-center">
          <div className="relative z-10">
            <h3 className="font-geist mt-4 text-3xl font-normal tracking-tighter sm:text-4xl md:text-5xl">
              Let’s Build Your School’s Future
            </h3>
            <p className="font-geist text-foreground/60 mt-3">
               Reduce paperwork, and enhance collaboration. Whether 
               you run a small academy or a large institution, we help you automate daily
               operations so you can focus on what truly matters—shaping young minds.
            </p>
          </div>
          <div
            className="absolute inset-0 mx-auto h-44 max-w-xs blur-[118px]"
            style={{
              background:
                'linear-gradient(152.92deg, rgba(192, 15, 102, 0.2) 4.54%, rgba(192, 11, 109, 0.26) 34.2%, rgba(192, 15, 102, 0.1) 77.55%)',
            }}
          ></div>
        </div>
        <hr className="bg-foreground/30 mx-auto mt-5 h-px w-1/2" />
        <div className="relative mt-12">
          <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((item, idx) => (
              <li
                key={idx}
                className="transform-gpu space-y-3 rounded-xl border bg-transparent p-4 [box-shadow:0_-20px_80px_-20px_#ff7aa42f_inset]"
              >
                <div className="text-primary w-fit transform-gpu rounded-full border p-4 [box-shadow:0_-20px_80px_-20px_#ff7aa43f_inset] dark:[box-shadow:0_-20px_80px_-20px_#ff7aa40f_inset]">
                  {item.icon}
                </div>
                <h4 className="font-geist text-lg font-bold tracking-tighter">
                  {item.title}
                </h4>
                <p className="text-gray-500">{item.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

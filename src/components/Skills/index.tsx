import { Skill } from "./Skill";

export function Skills() {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 justify-center gap-x-12"
      data-content
      id="skills"
    >
      <div className="skills__area">
        <h3 className="text-lg text-center mb-6">Frontend Developer</h3>

        <div className="flex justify-center gap-x-12">
          <div className="grid items-start gap-y-4">
            <Skill level={2} skill="HTML" />
            <Skill level={1} skill="CSS" />
          </div>

          <div className="grid items-start gap-y-4">
            <Skill level={2} skill="Js / Ts" />
            <Skill level={1} skill="ReactJs" />
          </div>
        </div>
      </div>

      <div className="skills__area">
        <h3 className="text-lg text-center mb-6">Backend Developer</h3>

        <div className="flex justify-center gap-x-12">
          <div className="grid items-start gap-y-4">
            <Skill level={1} skill="MySQL" />
            <Skill level={1} skill="MongoDB" />
            <Skill level={2} skill="PostgreSQL" />
          </div>

          <div className="grid items-start gap-y-4">
            <Skill level={2} skill="Node Js" />
            <Skill level={2} skill="Python" />
            <Skill level={1} skill="Docker" />
          </div>
        </div>
      </div>
    </div>
  );
}

import ResumePDF from "../assets/Ishwari_Sapkal_resume.pdf";

export default function Resume() {
  return (
    <div className="min-h-screen bg-[#050816]">
      <iframe
        src={ResumePDF}
        title="Resume"
        className="w-full h-screen"
      />
    </div>
  );
}
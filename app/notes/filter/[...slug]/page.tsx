// app/notes/filter/[...slug]/page.tsx
import SidebarNotes from "../@sidebar/SidebarNotes";

interface FilteredNotesPageProps {
  params: {
    slug: string[];
  };
}

export default function FilteredNotesPage({ params }: FilteredNotesPageProps) {
  
  const tag = params.slug[0] === "all" ? undefined : params.slug[0];

  return (
    <div style={{ display: "flex" }}>
      {}
      <SidebarNotes />
      
      {}
      <div style={{ flex: 1, padding: "20px" }}>
        <h1>Notes {tag ? `- ${tag}` : ""}</h1>
        {}
      </div>
    </div>
  );

    
}

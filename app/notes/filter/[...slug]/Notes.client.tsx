"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchNotes } from "@/lib/api";
import NoteList from "@/components/NoteList/NoteList";
import SearchBox from "@/components/SearchBox/SearchBox";
import Pagination from "@/components/Pagination/Pagination";
import Modal from "@/components/Modal/Modal";
import NoteForm from "@/components/NoteForm/NoteForm";

interface Props {
  tag?: string;
}

export default function Notes({ tag }: Props) {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["notes", tag, search, page],
    queryFn: () => fetchNotes(tag, search, page),
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError || !data) return <p>Error</p>;

  return (
    <>
      <SearchBox value={search} onChange={setSearch} />
      <button onClick={() => setIsModalOpen(true)}>Add note</button>

      <NoteList notes={data.notes} />

      <Pagination
        page={page}
        totalPages={data.totalPages}
        onPageChange={setPage}
      />

      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <NoteForm onClose={() => setIsModalOpen(false)} />
        </Modal>
      )}
    </>
  );
}

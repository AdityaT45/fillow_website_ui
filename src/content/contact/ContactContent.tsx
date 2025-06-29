import { Box, Pagination, Stack } from "@mui/material";
import ContactCard from "./ContactCard";
import ContactTabs from "./ContactTabs";
import { useState } from "react";

interface Contact {
  id: string;
  name: string;
  company: string;
  ProfilePicture: string;
}

interface ContactContentProps {
  contacts: Contact[];
}

const ContactContent: React.FC<ContactContentProps> = ({ contacts }) => {
  const [page, setPage] = useState(1);
  const contactsPerPage = 8;

  const startIndex = (page - 1) * contactsPerPage;
  const paginatedContacts = contacts.slice(startIndex, startIndex + contactsPerPage);
  const pageCount = Math.ceil(contacts.length / contactsPerPage);

  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <>
      <ContactTabs />

      {/* Wrapping inside a scroll-safe container */}
      
        <Box
          display="flex"
          flexWrap="wrap"
          justifyContent="center"
          alignItems="center"
          gap={3}
          maxWidth="1200px" // ✨ Prevents overflow that can affect sidebar
          width="100%"
          px={2}
        >
          {paginatedContacts.map((contact) => (
            <ContactCard key={contact.id} contact={contact} />
          ))}
        </Box>
      

      <Stack mt={2} spacing={2} alignItems="center">
        <Pagination count={pageCount} page={page} onChange={handleChange} />
      </Stack>
    </>
  );
};

export default ContactContent;

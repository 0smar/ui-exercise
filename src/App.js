import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MailList from './components/MailList';
import receivedEmails from './helpers/emails.json';

function App() {
  const [emails, setEmails] = useState(receivedEmails.messages);

  const getTags = (emails) => {
    const tagsArray = emails.map(email => email.tags);
    const allTags = [...new Set([].concat.apply([], tagsArray))];
    return allTags;
  }

  const resetEmails = () => {
    setEmails(receivedEmails.messages)
  }

  const handleTagClick = (tag) => {
    resetEmails();
    const filteredEmails = emails.filter(email => email.tags.includes(tag));
    setEmails(filteredEmails);
  }

  const handleDeleteEmails = (emailsToDelete) => {
    const emailIds = emailsToDelete.map(email => email.id);
    const newEmailList = emails.filter(email => !emailIds.includes(email.id));
    setEmails(newEmailList);
  }

  function formatDate(date) {
    let mm = date.getMonth()+1 < 10 ? `0${date.getMonth()+1}`: date.getMonth()+1;
    let dd = date.getDate()+1 < 10 ? `0${date.getDate()+1}`: date.getDate()+1;;
    let yyyy = date.getFullYear();
    let hours = date.getHours() < 10 ? `0${date.getHours()}`: date.getHours();
    let minutes = date.getMinutes();
    return `${mm}/${dd}/${yyyy}  ${hours}:${minutes}`;
  }

  const columns = React.useMemo(
    () => [
      {
        Header: 'All Email',
        columns: [
          {
            Header: 'Subject',
            accessor: 'subject',
            className: 'subject',
          },
          {
            Header: 'Sender',
            accessor: 'sender',
            className: 'sender',
          },
          {
            Header: 'Tags',
            accessor: 'tags',
            className: 'tags',
            Cell: ({ cell: { value } }) => value.map(value => <div className="tag" key={value}>{value}</div>),
          },
          {
            Header: 'Date',
            accessor: 'date',
            className: 'date',
            Cell: ({ cell: { value } }) => formatDate(new Date(value)),
          },
        ],
      },
    ],
    []
  )

  return (
    <div className="App">
      <Header />
      <div className="main-layout">
        <Sidebar resetEmails={resetEmails} tags={getTags(receivedEmails.messages)} handleTagClick={handleTagClick} />
        <MailList columns={columns} data={emails} handleDeleteEmails={handleDeleteEmails} />
      </div>
    </div>
  );
}

export default App;

function Header() {
  return(
    <div className="header">
      <div className="logo">
        SL Mail
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search by title" />
      </div>
      <div className="user-controls">
        <div className="button">
          i
        </div>
        <div className="avatar">
          OR
        </div>
      </div>
    </div>
  )
}

function TagBar() {
  return (
    <div className="tagbar">
      <h5>Tags</h5>
      <hr/>
      <ul>
        <li>
          <div className="tag">Tag 1</div>
        </li>
        <li>
          <div className="tag">Tag 1</div>
        </li>
        <li>
          <div className="tag">Tag 1</div>
        </li>
        <li>
          <div className="tag">Tag 1</div>
        </li>
        <li>
          <div className="tag">Tag 1</div>
        </li>

      </ul>
    </div>
  )
}

function Sidebar() {
  return(
    <div className="sidebar">
      <div className="button-sidebar">
        Inbox
      </div>
      <TagBar />
    </div>
  )
}

function MailList() {
  return(
    <div className="mail-list">
      <table>
        <thead>
          1-50 of 1000
        </thead>
        <tbody>
          <tr>
            <td className="subject">Hello</td>
            <td className="sender">bob.smith@gmail.com</td>
            <td className="tags">
              <div className="tag">Tag 1</div>
            </td>
            <td className="date">2017-03-05T03:25:43.511Z</td>
          </tr>
          <tr>
            <td className="subject">Hello</td>
            <td className="sender">bob.smith@gmail.com</td>
            <td className="tags">
              <div className="tag">Tag 1</div>
            </td>
            <td className="date">2017-03-05T03:25:43.511Z</td>
          </tr>
          <tr>
            <td className="subject">Hello</td>
            <td className="sender">bob.smith@gmail.com</td>
            <td className="tags">
              <div className="tag">Tag 1</div>
            </td>
            <td className="date">2017-03-05T03:25:43.511Z</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-layout">
        <Sidebar />
        <MailList />
      </div>
    </div>
  );
}

export default App;

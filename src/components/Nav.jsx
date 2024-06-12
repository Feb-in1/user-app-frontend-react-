import React from 'react'

const Nav = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-warning">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">USER APP</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
              <li class="nav-item">
            <a class="nav-link" aria-current="page" href="/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link  " href="/add">Add user</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/view ">View All</a>
          </li>
          {/* <li class="nav-item">
            <a class="nav-link active" href="/ViewAll">View All Books</a>
          </li> */}

        </ul>
      </div>
    </div>
  </nav>
    </div>
  )
}

export default Nav
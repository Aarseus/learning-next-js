import Head from "next/head";
import Link from "next/link";
const Navbar = () => {
  return (
    <>
      <Head>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous"/>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>
      </Head>
      <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <Link href="/users/123"><a class="navbar-brand">Navbar</a></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link href="#"><a class="nav-link active" aria-current="page">Home</a></Link>
        </li>
        <li class="nav-item">
          <Link href="#"><a class="nav-link">Link</a></Link>
        </li>
        <li class="nav-item dropdown">
          <Link href="#"><a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a></Link>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link href="#"><a class="dropdown-item">Action</a></Link></li>
            <li><Link href="#"><a class="dropdown-item">Another action</a></Link></li>
            <li><hr class="dropdown-divider"/></li>
            <li><Link href="#"><a class="dropdown-item">Something else here</a></Link></li>
          </ul>
        </li>
        <li class="nav-item">
          <Link href='#'><a class="nav-link disabled">Disabled</a></Link>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
      
    </>
  );
};

export default Navbar;

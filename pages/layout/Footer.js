import Link from 'next/link'
const Footer = () => {
    return ( 
        <>
        <div class="container">
  <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <p class="col-md-4 mb-0 text-muted">&copy; 2022 Company, Inc</p>

    <Link href="/"><a class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
      {/* <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"/></svg> */}
    </a></Link>

    <ul class="nav col-md-4 justify-content-end">
      <li class="nav-item"><Link href="#"><a class="nav-link px-2 text-muted">Home</a></Link></li>
      <li class="nav-item"><Link href="#"><a class="nav-link px-2 text-muted">Features</a></Link></li>
      <li class="nav-item"><Link href="#"><a class="nav-link px-2 text-muted">Pricing</a></Link></li>
      <li class="nav-item"><Link href="#"><a class="nav-link px-2 text-muted">FAQs</a></Link></li>
      <li class="nav-item"><Link href="#"><a class="nav-link px-2 text-muted">About</a></Link></li>
    </ul>
  </footer>
</div>
        </>
     );
}
 
export default Footer;
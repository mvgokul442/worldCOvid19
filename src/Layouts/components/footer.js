import React from "react"

const styles={
    width:"100%"
}
export default function Footer(){
    return(
        <footer id="sticky-footer" className="py-4 bg-dark text-white-50" style={styles}>
    <div className="container text-center">
      <small>Copyright &copy; World Covid19</small>
    </div>
  </footer>
    )
}

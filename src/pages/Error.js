import { NavLink } from "react-router-dom";
export default function Error() {
  return (
    <div className="error-page">
      <img src="https://assets-global.website-files.com/5f3c19f18169b65d9d0bf384/5f3c19f18169b62be30bf589_Astrodog1.png" width="600" sizes="(max-width: 767px) 80vw, 600px" srcSet="https://assets-global.website-files.com/5f3c19f18169b65d9d0bf384/5f3c19f18169b62be30bf589_Astrodog1-p-500.png 500w, https://assets-global.website-files.com/5f3c19f18169b65d9d0bf384/5f3c19f18169b62be30bf589_Astrodog1-p-800.png 800w, https://assets-global.website-files.com/5f3c19f18169b65d9d0bf384/5f3c19f18169b62be30bf589_Astrodog1-p-1080.png 1080w, https://assets-global.website-files.com/5f3c19f18169b65d9d0bf384/5f3c19f18169b62be30bf589_Astrodog1.png 1240w" alt="" />
      <div className="er-pg-r2">Oops :(</div>
      <div className="er-pg-r3">The page you are looking for doesn't exist or has been moved.</div>
      <NavLink className="er-pg-r4" to="/">Go back to homepage</NavLink>
    </div>
  )
}

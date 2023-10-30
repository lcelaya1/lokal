import "./index.css"
import GoogleScriptLoader from './test.jsx';

function App() {
  return (
    <body className="m-0 flex">
      <GoogleScriptLoader />
      <div className="basis-53">
        <img className="min-h-screen object-cover object-right w-full" src="../img/vecteezy_beautiful-sunset-lighthouse-landscape-illustration_11513281.jpg" alt="" />
      </div>
      <div className="basis-46 flex justify-center items-center">
        <div className="w-9/12 space-y-12">
          <div className="flex flex-col justify-start">
            <h1 className="font-spartan font-bold text-5xl text-lokal-black">Welcome to Lokal</h1>
            <h2 className="font-blinker font-semibold text-xl text-lokal-black/50">Come and create your account</h2>
          </div>
          <div>
            <button className="flex justify-between border border-lokal-black/50 rounded-full w-full px-4 py-2 text-lokal-black font-spartan font-semibold text-base">
              <img src="../img/False.svg" alt=""/>
              <p className="w-full text-center">Sign Up With Google</p>
            </button>
            <button>
              <div id="g_id_onload"
                  data-client_id="198566251409-uqn5adiqqn9a0lu0bnj1go7q7tc68km5.apps.googleusercontent.com"
                  data-context="signin"
                  data-ux_mode="popup"
                  data-login_uri="aninchi.com"
                  data-auto_prompt="false">
              </div>

              <div className="g_id_signin"
                  data-type="standard"
                  data-shape="pill"
                  data-theme="outline"
                  data-text="signin_with"
                  data-size="large"
                  data-logo_alignment="center"
                  data-width="400">
              </div>
            </button>
            <div></div>
          </div>
        </div>
      </div>
    </body>
  )
}

export default App

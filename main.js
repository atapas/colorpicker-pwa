import './style.css'
import {colors} from './colors'
import { registerSW } from "virtual:pwa-register"
import Toastify from 'toastify-js'

if ("serviceWorker" in navigator) {
  // && !/localhost/.test(window.location) && !/lvh.me/.test(window.location)) {
  const updateSW = registerSW({
    onNeedRefresh() {
      Toastify({
        text: `<h4 style='display: inline'>An update is available!</h4>
               <br><br>
               <a class='do-sw-update'>Click to update and reload</a>  `,
        escapeMarkup: false,
        gravity: "bottom",
        onClick() {
          updateSW(true);
        }
      }).showToast();
    }
  });
}


const createColorPallet = () => {
  colors.forEach((color) => {
    const colorPallet = document.createElement('div')
    colorPallet.classList.add('color-pallet')
    colorPallet.style.backgroundColor = color.data
    const colorName = document.createElement('div')
    colorName.classList.add('color-name')
    colorName.textContent = color.data
    colorPallet.appendChild(colorName)
    colorPallet.addEventListener('click', () => {
      const colorCode = color.data
      console.log(colorCode)
      copyContent(colorCode)
    })
    document.querySelector('#app').appendChild(colorPallet)
  })
}

const copyContent = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
    console.log('Content copied to clipboard');
  } catch (err) {
    console.error('Failed to copy: ', err);
  }
}

createColorPallet()




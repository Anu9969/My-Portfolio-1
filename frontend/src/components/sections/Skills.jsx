// import { BiLogoNetlify, BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi";
import { CgVercel } from "react-icons/cg";
// import { DiGithubAlt, DiMongodb } from "react-icons/di";
// import { FaDocker } from "react-icons/fa";
import {  FaCss3Alt, FaHtml5, FaNodeJs, FaPython, FaReact} from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import {  SiExpress, SiFlask, SiFlutter, SiPostman, SiTailwindcss } from "react-icons/si";
import { TokenIcon, WalletIcon, NetworkIcon } from '@web3icons/react'


        
 
function Skills() {
  return (
<section id="skills" className="mx-4 lg:mx-20">
  {/* =========== SKILLS TITLE =========== */}
  <h4 className="text-4xl font-bold text-center mt-20 dark:text-white">
    Technologies I Use.
  </h4>
  {/* =========== LIST OF SKILLS =========== */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 mt-8">
    <span className="inline-flex items-center justify-between gap-x-2 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-background text-primary dark:bg-dark dark:text-text">
      <FaHtml5 className="text-2xl" /> HTML
    </span>
    <span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-accent-light text-accent dark:bg-dark-accent dark:text-accent-light">
      <FaCss3Alt className="text-2xl" /> CSS
    </span>
    <span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-accent-light text-accent dark:bg-dark-accent dark:text-accent-light">
      <IoLogoJavascript className="text-2xl" /> JavaScript
    </span>

    <span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-accent-light text-accent dark:bg-dark-accent dark:text-accent-light">
      <FaPython className="text-2xl" /> Python
    </span>
    <span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-accent-light text-accent dark:bg-dark-accent dark:text-accent-light">
      <FaReact className="text-2xl" /> React
    </span>
    <span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-accent-light text-accent dark:bg-dark-accent dark:text-accent-light">
      <SiExpress className="text-2xl" /> Express
    </span>
    <span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-accent-light text-accent dark:bg-dark-accent dark:text-accent-light">
      <FaNodeJs className="text-2xl" /> NodeJS
    </span>
    <span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-accent-light text-accent dark:bg-dark-accent dark:text-accent-light">
      <SiTailwindcss className="text-2xl" /> Tailwind CSS
    </span>
    <span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-accent-light text-accent dark:bg-dark-accent dark:text-accent-light">
    <TokenIcon symbol="eth" variant="mono"  className="text-2xl" /> Solidity
    </span>
    <span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-accent-light text-accent dark:bg-dark-accent dark:text-accent-light">
      <SiTailwindcss className="text-2xl" /> Foundry
    </span> 
       <span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-accent-light text-accent dark:bg-dark-accent dark:text-accent-light">
      <TokenIcon symbol="eth" variant="mono"  className="text-2xl" />Ethereum
    </span> 
    <span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-accent-light text-accent dark:bg-dark-accent dark:text-accent-light">
    <TokenIcon symbol="sol" variant="mono" className="text-2xl" />Solana
    </span> 
    <span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-accent-light text-accent dark:bg-dark-accent dark:text-accent-light">
      <NetworkIcon network="telos" variant="mono"  className="text-2xl" />Telos
    </span> 
    <span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-accent-light text-accent dark:bg-dark-accent dark:text-accent-light">
      <SiFlutter className="text-2xl" /> Flutter
    </span>
    <span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-accent-light text-accent dark:bg-dark-accent dark:text-accent-light">
      <SiPostman className="text-2xl" /> Postman
    </span>
    <span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-accent-light text-accent dark:bg-dark-accent dark:text-accent-light">
      <CgVercel className="text-2xl" />Vercel
    </span>

    <span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-accent-light text-accent dark:bg-dark-accent dark:text-accent-light">
    <WalletIcon id="backpack" variant="mono" className="text-2xl" />Backpack
    </span>
    <span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-accent-light text-accent dark:bg-dark-accent dark:text-accent-light">
    <WalletIcon name="MetaMask" variant="mono" className="text-2xl" />Metamask
    </span>
    <span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-accent-light text-accent dark:bg-dark-accent dark:text-accent-light">
    <WalletIcon name="phantom" variant="mono" className="text-2xl" />Phantom
    </span>
</div>

</section>



  );
}

export default Skills;

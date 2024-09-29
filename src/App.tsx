import { useRef } from 'react';
import './App.css';
import { useSelectionText } from './hooks/useSelectionText';
import { MdOutlineContentCopy } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const ref = useRef<HTMLParagraphElement | null>(null);
  const { data, setData } = useSelectionText(ref);

  const handleCopyToClipBoard = async () => {
    if (data.selectedText) {
      try {
        await window.navigator.clipboard.writeText(data.selectedText);
        setData({ showTools: false });
        toast.success('Copied to clipboard!')
      } catch (err) {
        console.error('Failed to copy:', err);
      }
    }
  };

  return (
    <section className='app'>
      {data.showTools && (
        <div
          className='copy-div'
          onClick={handleCopyToClipBoard}
          style={{
            position: "absolute",
            left: `${data.x! + data.width! / 4}px`,
            top: `${data.y! - 10}px`,
            display: "inline-block",
            textAlign: 'center',
            cursor: 'pointer',
            background:'white',
            padding:'2px 8px',
          }}
        >
          <MdOutlineContentCopy title='copy' />
        </div>
      )}
      <div className="text-container">
        <h1>Copy, Highlight, Share Text on Selection</h1>
        <p ref={ref}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium voluptate, eos sint deserunt eum assumenda asperiores expedita ad repudiandae excepturi eveniet ipsa mollitia praesentium obcaecati dolores qui esse vero fugiat!
          Ab itaque suscipit ipsam eligendi alias voluptate ea rem illum! Laboriosam a similique quod placeat eius corrupti doloribus, officia nesciunt expedita minus repellat maiores dolor quam ipsam dicta nostrum delectus.
          Similique saepe suscipit facilis delectus earum maiores enim at totam ullam asperiores exercitationem ipsam illum, aperiam et quo, quibusdam nulla officia. Autem dolorem dignissimos minus ab doloribus quo quis aut?
          Iste neque suscipit accusamus maxime hic nisi quaerat facere sequi eaque voluptates pariatur explicabo, aliquid reiciendis atque unde delectus, asperiores velit nobis natus. Laboriosam, saepe illum? Hic sit dolorum at?
          Sit dolores odio labore. Quos ut, beatae molestiae culpa accusamus eaque tempora in ad et cumque dolores illum recusandae facilis incidunt. Amet doloremque eos ipsam corrupti aut, maiores illo dolores?
          Tenetur repellat saepe nihil quaerat inventore aut ipsa excepturi fugiat suscipit nostrum hic consectetur perspiciatis, a earum nobis quisquam dicta sit ut, asperiores, est minus adipisci repellendus. Amet, odit tempore!
          Recusandae dicta excepturi repellendus! Unde provident labore dolor saepe assumenda magnam expedita voluptatem atque quaerat, aut, nam reiciendis odit. Minus voluptatem accusamus numquam dolorum quis aliquam qui quo! Reprehenderit, quisquam!
          Molestiae ea eligendi dignissimos perferendis distinctio minima incidunt totam enim! Vitae iste quidem aut id ad, modi in commodi illo veniam architecto ratione reprehenderit praesentium quo, expedita, optio nulla harum!
          Corrupti ipsum nisi ex neque velit quibusdam praesentium, hic possimus odit assumenda doloremque dolorum sed quisquam et sunt fuga dolore optio nulla obcaecati enim rerum. Labore explicabo id illum qui!
          Sunt dolor itaque fugiat commodi, at magni quos dignissimos culpa, id consequuntur, doloribus iste unde. Corporis, autem optio at placeat in incidunt tempora? Sapiente incidunt alias soluta tenetur cumque minus?
          Labore et obcaecati magni nihil esse, odit itaque deserunt nulla laudantium, possimus rem, quas temporibus natus deleniti nam consequatur praesentium quod quisquam dolorum assumenda ad. Non alias natus officia incidunt?
          Aut, expedita vitae placeat repellendus enim excepturi provident nesciunt itaque autem asperiores maxime possimus non beatae deserunt, unde at aperiam repudiandae dolor quo culpa vero. Magnam aliquam esse hic sit.
          Fugiat voluptas beatae repudiandae esse nam consequuntur quo hic, in quis harum veniam asperiores, et nemo impedit vero inventore laborum expedita neque provident? Nostrum officiis, alias optio nulla obcaecati reiciendis.
          Consequatur voluptatum nobis voluptates ea perferendis error pariatur nisi illum facilis tempore! Fuga corporis distinctio unde aliquid incidunt. Accusamus doloribus porro numquam nihil inventore animi cum aliquam reprehenderit veniam molestias!
          Est nam perspiciatis vero optio? Voluptatibus omnis sit asperiores aut tenetur maiores laboriosam porro laborum officia quae est neque illum quaerat accusantium rem autem aliquam, cum explicabo libero harum ut?
          Provident, possimus. Deleniti, a id porro atque magni in quibusdam dolores sunt et nam quod, eum architecto sit? Voluptatem dicta asperiores et consequuntur quam eius sapiente qui pariatur nostrum voluptatum.
          Quos magnam magni possimus optio minima autem, cum eum fuga eaque saepe quo cupiditate animi numquam sapiente assumenda voluptatum obcaecati ipsam nisi, rem labore dolores facilis velit? Accusantium, tempora doloribus.
          Repudiandae perferendis tempore porro, eaque consequuntur animi impedit accusantium magnam placeat odio quibusdam cumque asperiores architecto facere unde, ad in dignissimos sint maiores maxime delectus. Esse dolor vitae laboriosam deleniti.
          Deleniti esse explicabo quis aut id quibusdam deserunt ea magni recusandae asperiores laboriosam, voluptas mollitia minus vitae, consequatur eos omnis, non nemo quo officia quas ex. Magni ratione tenetur suscipit.
          Minima rerum illo ut aperiam cupiditate molestias, ullam rem enim repudiandae autem vitae. Numquam totam facilis inventore perferendis itaque eos nemo harum. Numquam voluptatem esse vel non, omnis quo magnam?
        </p>
      </div>
      <ToastContainer position='top-right' />
    </section>
  );
}

export default App;

import React from 'react'

// An array of gifs that will be rendered in box components on both sides of the box elements. The Gifs are lasers, lights, and people dancing adding more fun interactions to the App
const Gifs = () => {
    const gifsArray = [
        <img src='https://wannado.com/wp-content/uploads/2017/08/ezgif-com-resize-16.gif'/>,
        <img src='https://images.hive.blog/0x0/https://img.esteem.ws/49zg9ph1sw.gif'/>,
        <img src='https://i.pinimg.com/originals/66/bb/be/66bbbeeddd02c5029c8b7fcff7ed4382.gif'/>,
        <img src='https://64.media.tumblr.com/2856e9084ed8feecc70e84d335a61bf2/44fc8f3501bdce43-65/s500x750/a0607c5bdc40effe1600fd3e28965a9fa41a8178.gif'/>,
        <img src='https://i.gifer.com/LBXB.gif'/>,
        <img src='https://i.gifer.com/7IgE.gif'/>,
        <img src='https://media3.giphy.com/media/l1J9PnuDqssiDjSve/200w.gif?cid=6c09b9527vb2d9i8x9e7y73pecgjpnruifjd74wnkk3dtx23&ep=v1_gifs_search&rid=200w.gif&ct=g'/>,
        <img src='https://64.media.tumblr.com/491d40839347d7769d70bbb59062a9cd/tumblr_p5ho4be5Ez1qeyvpto1_500.gif'/>,
        <img src='https://media1.giphy.com/media/3ePb6VtlVxXoZS0nwq/giphy.gif?cid=6c09b952nm81yibozigewhk2d887k0yycdowdz366rgw030v&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g'/>,
        <img src='https://i.pinimg.com/originals/f1/20/f1/f120f1bdde457ba9208083e5d9e957d5.gif'/>,
        <img src='https://i.redd.it/980jv7tosbp61.gif'/>,
        <img src='https://i.gifer.com/7CJk.gif'/>,
        <img src='https://cdn.dribbble.com/users/282274/screenshots/3384906/polygonal_tunnel_gesh.tv.gif'/>,
        <img src='https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2Ff5c0efb4-c5b6-4f9e-a876-1c0c7569b72e_944x868.gif'/>,
        <img src='https://i.gifer.com/origin/57/570ce35bb983b3ddf7d8fd2c6f9f95d8_w200.gif'/>,
        <img src='https://64.media.tumblr.com/575f819c218741a182b4f9f06e85eb52/tumblr_pqlhjzQQ7H1ux480bo3_r1_500.gif'/>,
        <img src='https://media2.giphy.com/media/xT9Igg1Kq1xmy7123m/200w.gif?cid=6c09b952n5posjsuvl8uzis0d29gdf872rp4zmenmxt29bmf&ep=v1_gifs_search&rid=200w.gif&ct=g'/>,
        <img src='https://media.tenor.com/wNK__KilO4sAAAAd/neon-lights-purple.gif'/>,
        <img src='https://media3.giphy.com/media/jriEPVMHTThc5IkkIX/200w.gif?cid=6c09b952ilnvryrvbouj6j3o1knz4xvpth1s7kbgrthdtwf2&ep=v1_gifs_search&rid=200w.gif&ct=g'/>,
        <img src='https://25.media.tumblr.com/tumblr_maq8tqKDs21rgszodo1_500.gif'/>,
        <img src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/f52927119445575.609d72ce0b2d6.gif'/>,
        <img src='https://cdn.dribbble.com/users/2066230/screenshots/11612384/image.gif'/>,
        <img src='https://media3.giphy.com/media/XDAPCNRcvnv8y9I83V/giphy.gif?cid=6c09b952dz76iki998xovtw8qxuakglgejqx6fa2lp6qllqi&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g'/>,
        <img src='https://i.pinimg.com/originals/2b/4b/f4/2b4bf450b3e1b44539a7d3ebfb8b987e.gif'/>,
        <img src='https://media1.giphy.com/media/l4FAQWgguy7Gkxala/giphy.gif?cid=6c09b952ybr4fqlk2z4zqchpb4e018a7xltbohw36ewlhvzc&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g'/>,
        <img src='https://media.tenor.com/QOqMGvudtL4AAAAd/barbie-movie-barbie.gif'/>,
        <img src='https://media.tenor.com/V3uCYuIdbKgAAAAC/office-party.gif'/>,
        <img src='https://media2.giphy.com/media/DfSLII45H40RW/giphy.gif'/>,
        <img src='https://media0.giphy.com/media/xTiIzCSjhFedORHIKQ/giphy.gif'/>,
        <img src='https://i.pinimg.com/originals/43/8d/e7/438de7bfd4ea41885ac45a6aaf8db18d.gif'/>,
        <img src='https://media.giphy.com/media/XQ6TYupmUdzxBB5gj2/giphy-downsized-large.gif'/>,
        <img src='https://i.pinimg.com/originals/7f/c5/73/7fc573272795b515f8cc8d4fa80661ac.gif'/>,
        <img src='https://38.media.tumblr.com/60f56cb5c62abac29640f265c9d20546/tumblr_n7lhg3FLjZ1si1t4yo1_500.gif'/>,
        <img src='https://media3.giphy.com/media/Xw6yFn7frR3Y4/200w.gif?cid=6c09b952gv4a6lj9y8vc0bx9b8eqedfpouttst01zfwfh3wt&ep=v1_gifs_search&rid=200w.gif&ct=g'/>,
        <img src='https://i.pinimg.com/originals/c9/b5/a1/c9b5a1585d43887448280b0f45601d94.gif'/>,
        <img src='https://media.tenor.com/pYi6D-WsfaMAAAAM/bill-hader-snl.gif'/>,
        <img src='https://media0.giphy.com/media/T7ukTzXQVmWqI/giphy.gif'/>,
        <img src='https://media1.giphy.com/media/REPL2BIiGhyFO/200w.gif?cid=6c09b952o9owpzx7z6xsksq4lzq0wgkmgv5ghj9b8a60fvt1&ep=v1_gifs_search&rid=200w.gif&ct=g'/>,
        <img src='https://media3.giphy.com/media/sYNmYafKHpOTM4w7lK/giphy.gif?cid=790b7611chd8s4vfzctu9kxxz5rd79hoyu82xi96fagkp75j&ep=v1_gifs_search&rid=giphy.gif&ct=g'/>,
        <img src='https://media2.giphy.com/media/3og0IFELH2AXdKM0es/200.gif?cid=6c09b952e34cha1b5queb794f0d3jtfjelstpv17wemqj2r5&ep=v1_internal_gif_by_id&rid=200.gif&ct=g'/>,
        <img src='https://i.gifer.com/CH7i.gif'/>,
        <img src='https://media1.giphy.com/media/3o7qE081rSFnRnl6Lu/giphy.gif?cid=6c09b9521gsx6dbipa15wqiutczhwpjrqw1phdjsrazi3wfi&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g'/>,
        <img src='https://gifbin.com/bin/1238584844_i_cant_dance.gif'/>,
        <img src='https://www.gearfuse.com/wp-content/uploads/2013/06/Brad-Pitt-Dancing.gif'/>,
        <img src='https://media1.giphy.com/media/iqesW2lx4IeBcZEck7/giphy.gif?cid=6c09b952xdu7p2cu5aik4mjtrka3dtfmpunemp28fbn6b80d&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g'/>,
        <img src='https://i.pinimg.com/originals/1e/66/42/1e66428dfe49b500df8567a9341724dd.gif'/>,
        <img src='https://media.tenor.com/odY31lOKctgAAAAM/seductive-dance.gif'/>,
        <img src='https://i.makeagif.com/media/10-13-2015/bDqBLM.gif'/>,
        <img src='https://i.pinimg.com/originals/57/e1/08/57e1084ca7b1c2a9fba31b8f52fd5982.gif'/>,
        <img src='https://media0.giphy.com/media/8FVAufI9rQTptuJ77T/giphy.gif?cid=6c09b952tzjebfomm9oc57jkqd4t2zn72zxr8486as9r6ws2&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g'/>,
        <img src='https://i.gifer.com/IAKq.gif'/>,
        <img src='https://media2.giphy.com/media/eN52IWsNgsnRoTGPem/giphy.gif?cid=6c09b95290p6gov9lrrkkvq87ek5v6ucap0xefzj1qyq5epb&ep=v1_gifs_search&rid=giphy.gif&ct=g'/>,
        <img src='https://i.pinimg.com/originals/16/40/26/164026e85dd5e3e58309e3f611399b6b.gif'/>,
        <img src='https://media3.giphy.com/media/7znuWsbD5ALicgIdJX/giphy.gif?cid=6c09b952fkka4wwju9405ioo3yn12qhf1zwmxsrmmrssr308&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g'/>,
        <img src='https://i.gifer.com/VKFU.gif'/>,
        <img src='https://media.tenor.com/KPN_b6lko58AAAAM/aerobics-80s.gif'/>,
        <img src='https://forums.sassnet.com/uploads/monthly_2018_04/5ad0c739aa3a7_CowboyDanceMoves.gif.491bee19ea5bb8dcac5a73f2eecb520f.gif'/>
    ]
// Overall this component produces a random index number to apply to the array of gifs so that they can be rendered randomly creating more fun appeal
    const randomIndex = Math.floor(Math.random() * gifsArray.length);
    const randomGifSrc = gifsArray[randomIndex];
    return randomGifSrc
}
export default Gifs
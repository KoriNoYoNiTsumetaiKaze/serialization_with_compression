const serUnit = require("./serUnit");
const min = 1;
const max = 300;
var NumArr = [];
let txt = '';
/*for (let i=0; i<1000; i++) {
    NumArr.push(Math.floor(Math.random() * (max - min)) + min);
}*/
      for (let i=0; i<=300; i++) {
        NumArr.push(i);
        NumArr.push(i);
        NumArr.push(i);
        }
for (let val of NumArr)
  txt +=(val+' ');
console.log(txt);
result = serUnit.serial(NumArr);
console.log(result);
console.log('Исходный размер: '+txt.length);
console.log('Итоговый размер: '+result.length);
console.log('Сжатие: '+((txt.length-result.length)/txt.length)*100);
txt = '';
//result = '0!1!2!3!4!5!6!7!8!9!3q!3w!3e!3r!3t!3y!3u!3i!3o!3p!3a!3s!3d!3f!3g!3h!3j!3k!3l!3z!3x!3c!3v!3b!3n!3m!3Q!3W!3E!3R!3T!3Y!3U!3I!3O!3P!3A!3S!3D!3F!3G!3H!3J!3K!3L!3Z!3X!3C!3V!3B!3N!3M!3й!3ц!3у!3к!3е!3н!3г!3ш!3щ!3з!3х!3ъ!3ф!3ы!3в!3а!3п!3р!3о!3л!3д!3ж!3э!3я!3ч!3с!3м!3и!3т!3ь!3б!3ю!3Й!3Ц!3У!3К!3Е!3Н!3q0!3q1!3q2!3q3!3q4!3q5!3q6!3q7!3q8!3q9!3w0!3w1!3w2!3w3!3w4!3w5!3w6!3w7!3w8!3w9!3e0!3e1!3e2!3e3!3e4!3e5!3e6!3e7!3e8!3e9!3r0!3r1!3r2!3r3!3r4!3r5!3r6!3r7!3r8!3r9!3t0!3t1!3t2!3t3!3t4!3t5!3t6!3t7!3t8!3t9!3y0!3y1!3y2!3y3!3y4!3y5!3y6!3y7!3y8!3y9!3u0!3u1!3u2!3u3!3u4!3u5!3u6!3u7!3u8!3u9!3i0!3i1!3i2!3i3!3i4!3i5!3i6!3i7!3i8!3i9!3o0!3o1!3o2!3o3!3o4!3o5!3o6!3o7!3o8!3o9!3p0!3p1!3p2!3p3!3p4!3p5!3p6!3p7!3p8!3p9!3a0!3a1!3a2!3a3!3a4!3a5!3a6!3a7!3a8!3a9!3s0!3s1!3s2!3s3!3s4!3s5!3s6!3s7!3s8!3s9!3d0!3d1!3d2!3d3!3d4!3d5!3d6!3d7!3d8!3d9!3f0!3f1!3f2!3f3!3f4!3f5!3f6!3f7!3f8!3f9!3g0!3g1!3g2!3g3!3g4!3g5!3g6!3g7!3g8!3g9!3h0!3h1!3h2!3h3!3h4!3h5!3h6!3h7!3h8!3h9!3j0!3j1!3j2!3j3!3j4!3j5!3j6!3j7!3j8!3j9!3k0!3k1!3k2!3k3!3k4!3k5!3k6!3k7!3k8!3k9!3l0!3l1!3l2!3l3!3l4!3l5!3l6!3l7!3l8!3l9!3z0!3z1!3z2!3z3!3z4!3z5!3z6!3z7!3z8!3z9!3x0';
NumArr = serUnit.deserial(result);
for (let val of NumArr)
  txt +=(val+' ');
console.log(txt);

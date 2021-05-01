import GetAPI from './Get';
import PostAPI from './Post';
import DeleteAPI from './Delete';

const getMahasiswa= () => GetAPI('mahasiswa?_sort=id&_order=desc');
const postMahasiswa = (dataYgDikirim)=>PostAPI('mahasiswa',dataYgDikirim);
const deleteMahasiswa = (dataYgDihapus)=>DeleteAPI('mahasiswa',dataYgDihapus);

const API = {getMahasiswa,postMahasiswa,deleteMahasiswa}

export default API

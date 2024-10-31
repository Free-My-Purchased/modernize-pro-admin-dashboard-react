import img1 from 'src/assets/images/profile/user-1.jpg';
import img2 from 'src/assets/images/profile/user-2.jpg';
import img3 from 'src/assets/images/profile/user-3.jpg';
import img4 from 'src/assets/images/profile/user-4.jpg';
import img5 from 'src/assets/images/profile/user-5.jpg';

export interface BasicsTableDataType {
  id: string;
  invoiceno: string;
  imgsrc: string;
  name: string;
  post: string;
  pname: string;
  status: string;
  progress: number;
}

export const basicsTableData: BasicsTableDataType[] = [
  {
    id: '1',
    invoiceno: '3066',
    imgsrc: img1,
    name: 'Sunil Joshi',
    post: 'Web Designer',
    pname: 'Elite Admin',
    status: 'Paid',
    progress: 60,
  },
  {
    id: '2',
    invoiceno: '3067',
    imgsrc: img2,
    name: 'Andrew McDownland',
    post: 'Project Manager',
    pname: 'Real Homes WP Theme',
    status: 'Cancelled',
    progress: 30,
  },
  {
    id: '3',
    invoiceno: '3068',
    imgsrc:img3,
    name: 'Christopher Jamil',
    post: 'Project Manager',
    pname: 'MedicalPro WP Theme',
    status: 'Refunded',
    progress: 45,
  },
  {
    id: '4',
    invoiceno: '3069',
    imgsrc: img4,
    name: 'Nirav Joshi',
    post: 'Frontend Engineer',
    pname: 'Hosting Press HTML',
    status: 'Paid',
    progress: 15,
  },
  {
    id: '5',
    invoiceno: '3070',
    imgsrc: img5,
    name: 'Micheal Doe',
    post: 'Content Writer',
    pname: 'Helping Hands WP Theme',
    status: 'Cancel',
    progress: 20,
  },
  {
    id: '6',
    invoiceno: '3071',
    imgsrc:img1,
    name: 'Sunil Joshi',
    post: 'Web Designer',
    pname: 'Elite Admin',
    status: 'Paid',
    progress: 65,
  },
  {
    id: '7',
    invoiceno: '3072',
    imgsrc:img2,
    name: 'Andrew McDownland',
    post: 'Project Manager',
    pname: 'Real Homes WP Theme',
    status: 'Cancelled',
    progress: 45,
  },
  {
    id: '8',
    invoiceno: '3073',
    imgsrc: img3,
    name: 'Christopher Jamil',
    post: 'Project Manager',
    pname: 'MedicalPro WP Theme',
    status: 'Refunded',
    progress: 54,
  },
  {
    id: '9',
    invoiceno: '3074',
    imgsrc: img4,
    name: 'Nirav Joshi',
    post: 'Frontend Engineer',
    pname: 'Hosting Press HTML',
    status: 'Paid',
    progress: 86,
  },
  {
    id: '10',
    invoiceno: '3075',
    imgsrc: img5,
    name: 'Sunil Joshi',
    post: 'Web Designer',
    pname: 'Elite Admin',
    status: 'Paid',
    progress: 23,
  },
  {
    id: '11',
    invoiceno: '3076',
    imgsrc: img2,
    name: 'Micheal Doe',
    post: 'Content Writer',
    pname: 'Helping Hands WP Theme',
    status: 'Cancel',
    progress: 20,
  },
  {
    id: '12',
    invoiceno: '3077',
    imgsrc: img1,
    name: 'Nirav Joshi',
    post: 'Frontend Engineer',
    pname: 'Hosting Press HTML',
    status: 'Paid',
    progress: 29,
  },
  {
    id: '13',
    invoiceno: '3078',
    imgsrc: img2,
    name: 'Andrew McDownland',
    post: 'Project Manager',
    pname: 'Real Homes WP Theme',
    status: 'Cancelled',
    progress: 78,
  },
  {
    id: '14',
    invoiceno: '3079',
    imgsrc:img3,
    name: 'Christopher Jamil',
    post: 'Project Manager',
    pname: 'MedicalPro WP Theme',
    status: 'Refunded',
    progress: 61,
  },
  {
    id: '15',
    invoiceno: '3080',
    imgsrc: img4,
    name: 'Micheal Doe',
    post: 'Content Writer',
    pname: 'Helping Hands WP Theme',
    status: 'Cancel',
    progress: 89,
  },
];

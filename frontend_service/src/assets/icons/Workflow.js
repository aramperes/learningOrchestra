import React from 'react';

export default ({color='#8D8D8D', size='24'}) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17 16C16.3814 16.0011 15.7784 16.1941 15.274 16.5523C14.7697 16.9105 14.3888 17.4163 14.184 18H11C9.346 18 8 16.654 8 15V11.975C8.86073 12.6361 9.91472 12.9962 11 13H14.184C14.3888 13.5837 14.7697 14.0895 15.274 14.4477C15.7784 14.8059 16.3814 14.9989 17 15C17.7956 15 18.5587 14.6839 19.1213 14.1213C19.6839 13.5587 20 12.7956 20 12C20 11.2044 19.6839 10.4413 19.1213 9.87868C18.5587 9.31607 17.7956 9 17 9C16.3814 9.00111 15.7784 9.19406 15.274 9.55226C14.7697 9.91046 14.3888 10.4163 14.184 11H11C9.346 11 8 9.654 8 8V7.816C8.58372 7.61118 9.08954 7.23035 9.44774 6.726C9.80594 6.22165 9.99889 5.61861 10 5C10 4.60603 9.9224 4.21593 9.77164 3.85195C9.62087 3.48797 9.3999 3.15726 9.12132 2.87868C8.84274 2.6001 8.51203 2.37913 8.14805 2.22836C7.78407 2.0776 7.39397 2 7 2C6.60603 2 6.21593 2.0776 5.85195 2.22836C5.48797 2.37913 5.15726 2.6001 4.87868 2.87868C4.6001 3.15726 4.37913 3.48797 4.22836 3.85195C4.0776 4.21593 4 4.60603 4 5C4.00111 5.61861 4.19406 6.22165 4.55226 6.726C4.91046 7.23035 5.41628 7.61118 6 7.816V15C6 17.757 8.243 20 11 20H14.184C14.3888 20.5837 14.7697 21.0895 15.274 21.4477C15.7784 21.8059 16.3814 21.9989 17 22C17.7956 22 18.5587 21.6839 19.1213 21.1213C19.6839 20.5587 20 19.7956 20 19C20 18.2044 19.6839 17.4413 19.1213 16.8787C18.5587 16.3161 17.7956 16 17 16ZM17 11C17.1981 10.9998 17.3917 11.0584 17.5565 11.1683C17.7213 11.2782 17.8497 11.4345 17.9256 11.6175C18.0015 11.8004 18.0214 12.0018 17.9828 12.196C17.9442 12.3903 17.8489 12.5688 17.7088 12.7088C17.5688 12.8489 17.3903 12.9442 17.196 12.9828C17.0018 13.0214 16.8004 13.0015 16.6175 12.9256C16.4345 12.8497 16.2782 12.7213 16.1683 12.5565C16.0584 12.3917 15.9998 12.1981 16 12C16 11.449 16.448 11 17 11ZM7 4C7.19806 3.9998 7.39174 4.05837 7.5565 4.16828C7.72127 4.2782 7.84972 4.43452 7.92561 4.61747C8.0015 4.80042 8.02141 5.00177 7.98281 5.19604C7.94422 5.39031 7.84887 5.56876 7.70881 5.70881C7.56876 5.84887 7.39031 5.94422 7.19604 5.98281C7.00177 6.02141 6.80042 6.0015 6.61747 5.92561C6.43452 5.84972 6.2782 5.72127 6.16828 5.5565C6.05837 5.39174 5.9998 5.19806 6 5C6 4.449 6.448 4 7 4ZM17 20C16.7425 19.9885 16.4994 19.8781 16.3213 19.6918C16.1431 19.5055 16.0437 19.2577 16.0437 19C16.0437 18.7423 16.1431 18.4945 16.3213 18.3082C16.4994 18.1219 16.7425 18.0115 17 18C17.2575 18.0115 17.5006 18.1219 17.6787 18.3082C17.8569 18.4945 17.9563 18.7423 17.9563 19C17.9563 19.2577 17.8569 19.5055 17.6787 19.6918C17.5006 19.8781 17.2575 19.9885 17 20Z" fill={color}/>
    </svg>
  );
}
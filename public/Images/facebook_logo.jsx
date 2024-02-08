const FacebookLogo = ({ SvgClass = "", OutClass = "", IconClass = "" }) => {
  return (
    <div>
      <svg
        className={SvgClass}
        width="31"
        height="28"
        viewBox="0 0 31 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className={OutClass}
          d="M30.0513 14C30.0513 21.4295 23.6686 27.5 15.7346 27.5C7.80067 27.5 1.41797 21.4295 1.41797 14C1.41797 6.57049 7.80067 0.5 15.7346 0.5C23.6686 0.5 30.0513 6.57049 30.0513 14Z"
          stroke="white"
        />
        <path
          className={IconClass}
          d="M14.368 20.3038V14.7503H12.3901V12.5859H14.368V10.9898C14.368 9.13752 15.5653 8.12891 17.3141 8.12891C18.1517 8.12891 18.8717 8.18784 19.0815 8.21417V10.1499L17.8686 10.1505C16.9175 10.1505 16.7334 10.5775 16.7334 11.2041V12.5859H19.0016L18.7063 14.7503H16.7334V20.3038H14.368Z"
          fill="white"
        />
      </svg>
    </div>
  );
};

export default FacebookLogo;

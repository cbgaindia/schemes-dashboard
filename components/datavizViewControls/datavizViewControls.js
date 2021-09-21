import React from 'react';

const radioButtons = [
  {
    uncheckImage: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        className="mr-2"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.66667 14.6667H15.3333C15.5101 14.6667 15.6797 14.7369 15.8047 14.8619C15.9298 14.987 16 15.1565 16 15.3333C16 15.5101 15.9298 15.6797 15.8047 15.8047C15.6797 15.9298 15.5101 16 15.3333 16H0.986C0.724666 15.9998 0.474077 15.896 0.289223 15.7112C0.10437 15.5265 0.000353095 15.276 0 15.0147V0.666667C0 0.489856 0.0702379 0.320286 0.195262 0.195262C0.320286 0.0702379 0.489856 0 0.666667 0C0.843478 0 1.01305 0.0702379 1.13807 0.195262C1.2631 0.320286 1.33333 0.489856 1.33333 0.666667V14.3333C1.33333 14.4217 1.36845 14.5065 1.43096 14.569C1.49348 14.6315 1.57826 14.6667 1.66667 14.6667ZM14 13.3333H3.66667C3.41269 13.3436 3.16496 13.253 2.97759 13.0812C2.79022 12.9095 2.67844 12.6706 2.66667 12.4166V11.25C2.67844 10.9961 2.79022 10.7571 2.97759 10.5854C3.16496 10.4136 3.41269 10.323 3.66667 10.3333H14C14.254 10.323 14.5017 10.4136 14.6891 10.5854C14.8765 10.7571 14.9882 10.9961 15 11.25V12.4166C14.9882 12.6706 14.8765 12.9095 14.6891 13.0812C14.5017 13.253 14.254 13.3436 14 13.3333ZM2.66667 7.74998C2.67844 8.00389 2.79022 8.24282 2.97759 8.41458C3.16496 8.58634 3.41269 8.67696 3.66667 8.66665H10C10.254 8.67696 10.5017 8.58634 10.6891 8.41458C10.8765 8.24282 10.9882 8.00389 11 7.74998V6.58331C10.9882 6.3294 10.8765 6.09047 10.6891 5.91871C10.5017 5.74695 10.254 5.65633 10 5.66665H3.66667C3.41269 5.65633 3.16496 5.74695 2.97759 5.91871C2.79022 6.09047 2.67844 6.3294 2.66667 6.58331V7.74998ZM6.66667 3.99998H3.66667C3.41269 4.01029 3.16496 3.91967 2.97759 3.74791C2.79022 3.57616 2.67844 3.33722 2.66667 3.08331V1.91665C2.67844 1.66274 2.79022 1.4238 2.97759 1.25204C3.16496 1.08029 3.41269 0.989666 3.66667 0.999979H6.66667C6.92064 0.989666 7.16837 1.08029 7.35575 1.25204C7.54312 1.4238 7.6549 1.66274 7.66667 1.91665V3.08331C7.6549 3.33722 7.54312 3.57616 7.35575 3.74791C7.16837 3.91967 6.92064 4.01029 6.66667 3.99998Z"
          fill="#4B4797"
        />
      </svg>
    ),
    checkImage: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        className="mr-2"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.66667 14.6667H15.3333C15.5101 14.6667 15.6797 14.7369 15.8047 14.8619C15.9298 14.987 16 15.1565 16 15.3333C16 15.5101 15.9298 15.6797 15.8047 15.8047C15.6797 15.9298 15.5101 16 15.3333 16H0.986C0.724666 15.9998 0.474077 15.896 0.289223 15.7112C0.10437 15.5265 0.000353095 15.276 0 15.0147V0.666667C0 0.489856 0.0702379 0.320286 0.195262 0.195262C0.320286 0.0702379 0.489856 0 0.666667 0C0.843478 0 1.01305 0.0702379 1.13807 0.195262C1.2631 0.320286 1.33333 0.489856 1.33333 0.666667V14.3333C1.33333 14.4217 1.36845 14.5065 1.43096 14.569C1.49348 14.6315 1.57826 14.6667 1.66667 14.6667ZM14 13.3333H3.66667C3.41269 13.3436 3.16496 13.253 2.97759 13.0812C2.79022 12.9095 2.67844 12.6706 2.66667 12.4166V11.25C2.67844 10.9961 2.79022 10.7571 2.97759 10.5854C3.16496 10.4136 3.41269 10.323 3.66667 10.3333H14C14.254 10.323 14.5017 10.4136 14.6891 10.5854C14.8765 10.7571 14.9882 10.9961 15 11.25V12.4166C14.9882 12.6706 14.8765 12.9095 14.6891 13.0812C14.5017 13.253 14.254 13.3436 14 13.3333ZM2.66667 7.74998C2.67844 8.00389 2.79022 8.24282 2.97759 8.41458C3.16496 8.58634 3.41269 8.67696 3.66667 8.66665H10C10.254 8.67696 10.5017 8.58634 10.6891 8.41458C10.8765 8.24282 10.9882 8.00389 11 7.74998V6.58331C10.9882 6.3294 10.8765 6.09047 10.6891 5.91871C10.5017 5.74695 10.254 5.65633 10 5.66665H3.66667C3.41269 5.65633 3.16496 5.74695 2.97759 5.91871C2.79022 6.09047 2.67844 6.3294 2.66667 6.58331V7.74998ZM6.66667 3.99998H3.66667C3.41269 4.01029 3.16496 3.91967 2.97759 3.74791C2.79022 3.57616 2.67844 3.33722 2.66667 3.08331V1.91665C2.67844 1.66274 2.79022 1.4238 2.97759 1.25204C3.16496 1.08029 3.41269 0.989666 3.66667 0.999979H6.66667C6.92064 0.989666 7.16837 1.08029 7.35575 1.25204C7.54312 1.4238 7.6549 1.66274 7.66667 1.91665V3.08331C7.6549 3.33722 7.54312 3.57616 7.35575 3.74791C7.16837 3.91967 6.92064 4.01029 6.66667 3.99998Z"
          fill="white"
        />
      </svg>
    ),
    title: 'Compare States',
    val: 'bar',
    class: 'mr-3',
  },
  {
    uncheckImage: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        className="mr-2"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.9732 2.67821C13.9349 2.63512 13.886 2.60271 13.8315 2.58417C13.7769 2.56563 13.7184 2.56159 13.6618 2.57246C13.6052 2.58333 13.5524 2.60872 13.5085 2.64615C13.4647 2.68359 13.4313 2.73177 13.4117 2.78598L12.674 4.82822C12.5857 5.04902 12.4398 5.24213 12.2516 5.38743C12.0633 5.53274 11.8396 5.62494 11.6036 5.65443H9.71572C9.66292 5.66104 9.61248 5.68021 9.56863 5.71035C9.52478 5.74049 9.48879 5.78071 9.4637 5.82763C9.43861 5.87455 9.42515 5.92681 9.42443 5.98001C9.42372 6.03322 9.43578 6.08581 9.45961 6.13339L10.0483 7.6501C10.0759 7.70541 10.1183 7.75194 10.1708 7.78449C10.2233 7.81703 10.2839 7.83431 10.3457 7.83437H10.8972C10.9538 7.83443 11.0095 7.84895 11.0589 7.87654C11.1084 7.90414 11.1499 7.94391 11.1797 7.99207C11.2095 8.04024 11.2265 8.09521 11.2291 8.15178C11.2317 8.20835 11.2198 8.26464 11.1945 8.31533L9.34785 12.1018C9.24555 12.3715 9.05949 12.6012 8.81697 12.7573C8.57446 12.9135 8.28828 12.9877 8.00045 12.9692C7.71263 12.9506 7.43833 12.8403 7.21784 12.6544C6.99735 12.4684 6.84229 12.2167 6.77542 11.9361L6.11619 9.16416C6.08854 9.10898 6.04608 9.06258 5.99357 9.03016C5.94105 8.99773 5.88055 8.98056 5.81883 8.98055H5.52281C4.94941 8.98055 4.3995 8.75277 3.99405 8.34732C3.5886 7.94187 3.36083 7.39197 3.36083 6.81857C3.36083 6.24518 3.5886 5.69527 3.99405 5.28982C4.3995 4.88437 4.94941 4.65659 5.52281 4.65659H8.25023C8.33844 4.65659 8.42304 4.62155 8.48542 4.55917C8.5478 4.4968 8.58284 4.41219 8.58284 4.32398V3.56163C8.58283 3.29662 8.50368 3.03764 8.35553 2.81791C8.20738 2.59817 7.99698 2.42769 7.75131 2.32831L7.56239 2.25247C7.504 2.22942 7.45333 2.19031 7.41623 2.13968C7.37914 2.08904 7.35712 2.02894 7.35274 1.96633C7.34836 1.90371 7.36178 1.84113 7.39146 1.78582C7.42115 1.73051 7.46587 1.68473 7.52048 1.65377L9.33055 0.722453C9.39305 0.690463 9.44383 0.639515 9.47561 0.576905C9.50739 0.514295 9.51854 0.443234 9.50746 0.3739C9.49638 0.304566 9.46365 0.240515 9.41395 0.190921C9.36425 0.141327 9.30013 0.108733 9.23077 0.097807C8.8295 0.0334337 8.42379 0.000736799 8.0174 1.8928e-05C6.18559 -0.00396424 4.4079 0.62082 2.98137 1.76997C1.55484 2.91912 0.565883 4.52303 0.179757 6.31368C-0.206369 8.10434 0.0337238 9.97327 0.859916 11.6082C1.68611 13.2431 3.04835 14.545 4.71902 15.2962C6.38969 16.0475 8.26758 16.2027 10.0389 15.7358C11.8102 15.2689 13.3677 14.2083 14.451 12.7312C15.5344 11.2541 16.0779 9.4499 15.991 7.62015C15.904 5.79041 15.1917 4.04593 13.9732 2.67821Z"
          fill="#5C5C5C"
        />
      </svg>
    ),
    checkImage: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        className="mr-2"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.9732 2.67821C13.9349 2.63512 13.886 2.60271 13.8315 2.58417C13.7769 2.56563 13.7184 2.56159 13.6618 2.57246C13.6052 2.58333 13.5524 2.60872 13.5085 2.64615C13.4647 2.68359 13.4313 2.73177 13.4117 2.78598L12.674 4.82822C12.5857 5.04902 12.4398 5.24213 12.2516 5.38743C12.0633 5.53274 11.8396 5.62494 11.6036 5.65443H9.71572C9.66292 5.66104 9.61248 5.68021 9.56863 5.71035C9.52478 5.74049 9.48879 5.78071 9.4637 5.82763C9.43861 5.87455 9.42515 5.92681 9.42443 5.98001C9.42372 6.03322 9.43578 6.08581 9.45961 6.13339L10.0483 7.6501C10.0759 7.70541 10.1183 7.75194 10.1708 7.78449C10.2233 7.81703 10.2839 7.83431 10.3457 7.83437H10.8972C10.9538 7.83443 11.0095 7.84895 11.0589 7.87654C11.1084 7.90414 11.1499 7.94391 11.1797 7.99207C11.2095 8.04024 11.2265 8.09521 11.2291 8.15178C11.2317 8.20835 11.2198 8.26464 11.1945 8.31533L9.34785 12.1018C9.24555 12.3715 9.05949 12.6012 8.81697 12.7573C8.57446 12.9135 8.28828 12.9877 8.00045 12.9692C7.71263 12.9506 7.43833 12.8403 7.21784 12.6544C6.99735 12.4684 6.84229 12.2167 6.77542 11.9361L6.11619 9.16416C6.08854 9.10898 6.04608 9.06258 5.99357 9.03016C5.94105 8.99773 5.88055 8.98056 5.81883 8.98055H5.52281C4.94941 8.98055 4.3995 8.75277 3.99405 8.34732C3.5886 7.94187 3.36083 7.39197 3.36083 6.81857C3.36083 6.24518 3.5886 5.69527 3.99405 5.28982C4.3995 4.88437 4.94941 4.65659 5.52281 4.65659H8.25023C8.33844 4.65659 8.42304 4.62155 8.48542 4.55917C8.5478 4.4968 8.58284 4.41219 8.58284 4.32398V3.56163C8.58283 3.29662 8.50368 3.03764 8.35553 2.81791C8.20738 2.59817 7.99698 2.42769 7.75131 2.32831L7.56239 2.25247C7.504 2.22942 7.45333 2.19031 7.41623 2.13968C7.37914 2.08904 7.35712 2.02894 7.35274 1.96633C7.34836 1.90371 7.36178 1.84113 7.39146 1.78582C7.42115 1.73051 7.46587 1.68473 7.52048 1.65377L9.33055 0.722453C9.39305 0.690463 9.44383 0.639515 9.47561 0.576905C9.50739 0.514295 9.51854 0.443234 9.50746 0.3739C9.49638 0.304566 9.46365 0.240515 9.41395 0.190921C9.36425 0.141327 9.30013 0.108733 9.23077 0.097807C8.8295 0.0334337 8.42379 0.000736799 8.0174 1.8928e-05C6.18559 -0.00396424 4.4079 0.62082 2.98137 1.76997C1.55484 2.91912 0.565883 4.52303 0.179757 6.31368C-0.206369 8.10434 0.0337238 9.97327 0.859916 11.6082C1.68611 13.2431 3.04835 14.545 4.71902 15.2962C6.38969 16.0475 8.26758 16.2027 10.0389 15.7358C11.8102 15.2689 13.3677 14.2083 14.451 12.7312C15.5344 11.2541 16.0779 9.4499 15.991 7.62015C15.904 5.79041 15.1917 4.04593 13.9732 2.67821Z"
          fill="white"
        />
      </svg>
    ),
    title: 'Choropleth',
    val: 'map',
    class: 'text-light left-curved-border',
  },
  {
    uncheckImage: (
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        className="mr-1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.3333 1.55551C11.3333 1.31977 11.2397 1.09367 11.073 0.926975C10.9063 0.760277 10.6802 0.666626 10.4444 0.666626H1.55555C1.3198 0.666626 1.0937 0.760277 0.927006 0.926975C0.760307 1.09367 0.666656 1.31977 0.666656 1.55551L0.666656 10.4444C0.666656 10.6802 0.760307 10.9062 0.927006 11.0729C1.0937 11.2396 1.3198 11.3333 1.55555 11.3333H10.4444C10.6802 11.3333 10.9063 11.2396 11.073 11.0729C11.2397 10.9062 11.3333 10.6802 11.3333 10.4444V1.55551ZM10.2222 1.55551C10.2811 1.55551 10.3377 1.57893 10.3793 1.6206C10.421 1.66228 10.4444 1.7188 10.4444 1.77774V3.65907C10.4444 3.68854 10.4327 3.7168 10.4119 3.73764C10.3911 3.75848 10.3628 3.77018 10.3333 3.77018H1.66666C1.63719 3.77018 1.60893 3.75848 1.58809 3.73764C1.56725 3.7168 1.55555 3.68854 1.55555 3.65907V1.77774C1.55555 1.7188 1.57896 1.66228 1.62063 1.6206C1.66231 1.57893 1.71883 1.55551 1.77777 1.55551H10.2222ZM1.66666 7.32574C1.63719 7.32574 1.60893 7.31403 1.58809 7.29319C1.56725 7.27236 1.55555 7.24409 1.55555 7.21463V4.77018C1.55555 4.74071 1.56725 4.71245 1.58809 4.69161C1.60893 4.67078 1.63719 4.65907 1.66666 4.65907H3.66666C3.69612 4.65907 3.72439 4.67078 3.74522 4.69161C3.76606 4.71245 3.77777 4.74071 3.77777 4.77018V7.21463C3.77777 7.24409 3.76606 7.27236 3.74522 7.29319C3.72439 7.31403 3.69612 7.32574 3.66666 7.32574H1.66666ZM4.66666 4.77018C4.66666 4.74071 4.67836 4.71245 4.6992 4.69161C4.72004 4.67078 4.7483 4.65907 4.77777 4.65907H7.22221C7.25168 4.65907 7.27994 4.67078 7.30078 4.69161C7.32162 4.71245 7.33332 4.74071 7.33332 4.77018V7.21463C7.33332 7.24409 7.32162 7.27236 7.30078 7.29319C7.27994 7.31403 7.25168 7.32574 7.22221 7.32574H4.77777C4.7483 7.32574 4.72004 7.31403 4.6992 7.29319C4.67836 7.27236 4.66666 7.24409 4.66666 7.21463V4.77018ZM8.22221 4.77018C8.22221 4.74071 8.23392 4.71245 8.25476 4.69161C8.27559 4.67078 8.30385 4.65907 8.33332 4.65907H10.3333C10.3628 4.65907 10.3911 4.67078 10.4119 4.69161C10.4327 4.71245 10.4444 4.74071 10.4444 4.77018V7.21463C10.4444 7.24409 10.4327 7.27236 10.4119 7.29319C10.3911 7.31403 10.3628 7.32574 10.3333 7.32574H8.33332C8.30385 7.32574 8.27559 7.31403 8.25476 7.29319C8.23392 7.27236 8.22221 7.24409 8.22221 7.21463V4.77018ZM1.77777 10.4444C1.71883 10.4444 1.66231 10.421 1.62063 10.3793C1.57896 10.3376 1.55555 10.2811 1.55555 10.2222V8.32574C1.55555 8.29627 1.56725 8.26801 1.58809 8.24717C1.60893 8.22633 1.63719 8.21463 1.66666 8.21463H10.3333C10.3628 8.21463 10.3911 8.22633 10.4119 8.24717C10.4327 8.26801 10.4444 8.29627 10.4444 8.32574V10.2222C10.4444 10.2811 10.421 10.3376 10.3793 10.3793C10.3377 10.421 10.2811 10.4444 10.2222 10.4444H1.77777Z"
          fill="black"
          fillOpacity="0.64"
        />
      </svg>
    ),
    checkImage: (
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        className="mr-1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.3333 1.55551C11.3333 1.31977 11.2397 1.09367 11.073 0.926975C10.9063 0.760277 10.6802 0.666626 10.4444 0.666626H1.55555C1.3198 0.666626 1.0937 0.760277 0.927006 0.926975C0.760307 1.09367 0.666656 1.31977 0.666656 1.55551L0.666656 10.4444C0.666656 10.6802 0.760307 10.9062 0.927006 11.0729C1.0937 11.2396 1.3198 11.3333 1.55555 11.3333H10.4444C10.6802 11.3333 10.9063 11.2396 11.073 11.0729C11.2397 10.9062 11.3333 10.6802 11.3333 10.4444V1.55551ZM10.2222 1.55551C10.2811 1.55551 10.3377 1.57893 10.3793 1.6206C10.421 1.66228 10.4444 1.7188 10.4444 1.77774V3.65907C10.4444 3.68854 10.4327 3.7168 10.4119 3.73764C10.3911 3.75848 10.3628 3.77018 10.3333 3.77018H1.66666C1.63719 3.77018 1.60893 3.75848 1.58809 3.73764C1.56725 3.7168 1.55555 3.68854 1.55555 3.65907V1.77774C1.55555 1.7188 1.57896 1.66228 1.62063 1.6206C1.66231 1.57893 1.71883 1.55551 1.77777 1.55551H10.2222ZM1.66666 7.32574C1.63719 7.32574 1.60893 7.31403 1.58809 7.29319C1.56725 7.27236 1.55555 7.24409 1.55555 7.21463V4.77018C1.55555 4.74071 1.56725 4.71245 1.58809 4.69161C1.60893 4.67078 1.63719 4.65907 1.66666 4.65907H3.66666C3.69612 4.65907 3.72439 4.67078 3.74522 4.69161C3.76606 4.71245 3.77777 4.74071 3.77777 4.77018V7.21463C3.77777 7.24409 3.76606 7.27236 3.74522 7.29319C3.72439 7.31403 3.69612 7.32574 3.66666 7.32574H1.66666ZM4.66666 4.77018C4.66666 4.74071 4.67836 4.71245 4.6992 4.69161C4.72004 4.67078 4.7483 4.65907 4.77777 4.65907H7.22221C7.25168 4.65907 7.27994 4.67078 7.30078 4.69161C7.32162 4.71245 7.33332 4.74071 7.33332 4.77018V7.21463C7.33332 7.24409 7.32162 7.27236 7.30078 7.29319C7.27994 7.31403 7.25168 7.32574 7.22221 7.32574H4.77777C4.7483 7.32574 4.72004 7.31403 4.6992 7.29319C4.67836 7.27236 4.66666 7.24409 4.66666 7.21463V4.77018ZM8.22221 4.77018C8.22221 4.74071 8.23392 4.71245 8.25476 4.69161C8.27559 4.67078 8.30385 4.65907 8.33332 4.65907H10.3333C10.3628 4.65907 10.3911 4.67078 10.4119 4.69161C10.4327 4.71245 10.4444 4.74071 10.4444 4.77018V7.21463C10.4444 7.24409 10.4327 7.27236 10.4119 7.29319C10.3911 7.31403 10.3628 7.32574 10.3333 7.32574H8.33332C8.30385 7.32574 8.27559 7.31403 8.25476 7.29319C8.23392 7.27236 8.22221 7.24409 8.22221 7.21463V4.77018ZM1.77777 10.4444C1.71883 10.4444 1.66231 10.421 1.62063 10.3793C1.57896 10.3376 1.55555 10.2811 1.55555 10.2222V8.32574C1.55555 8.29627 1.56725 8.26801 1.58809 8.24717C1.60893 8.22633 1.63719 8.21463 1.66666 8.21463H10.3333C10.3628 8.21463 10.3911 8.22633 10.4119 8.24717C10.4327 8.26801 10.4444 8.29627 10.4444 8.32574V10.2222C10.4444 10.2811 10.421 10.3376 10.3793 10.3793C10.3377 10.421 10.2811 10.4444 10.2222 10.4444H1.77777Z"
          fill="white"
        />
      </svg>
    ),
    title: 'Table',
    val: 'table',
    class: 'text-light right-curved-border',
  },
];

const DatavizViewControls = (props) => (
  <fieldset className="scheme__controls">
    <legend className="screen-reader-text">Select Viz type: </legend>
    {radioButtons.map((radio, index) => (
      <React.Fragment key={`dataviz-${index}`}>
        <input
          className="screen-reader-text"
          type="radio"
          id={radio.val}
          name="viz-types"
          value={radio.val}
          onChange={(e) => props.handleChangeViz(e.target.value)}
          checked={radio.val === props.view}
          readOnly="true"
        />
        <label className={radio.class} htmlFor={radio.val}>
          {radio.val === props.view ? radio.checkImage : radio.uncheckImage}
          {radio.title}
        </label>
      </React.Fragment>
    ))}
  </fieldset>
);
export default DatavizViewControls;

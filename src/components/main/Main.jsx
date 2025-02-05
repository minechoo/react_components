import axios from 'axios';
import { useEffect, useState, useRef } from 'react';

//import { memo } from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';

import { Layout } from '../common/Layout';
import Modal from '../common/Modal';
import Accordion from '../sub/Accordion';

function BtnRolling() {
	const btnStart = useRef(null);
	const btnStop = useRef(null);
	const swiper = useSwiper();
	return (
		<nav className='controls'>
			<FontAwesomeIcon
				icon={faPlay}
				ref={btnStart}
				onClick={(e) => {
					swiper.autoplay.start();
					btnStart.current.classList.add('on');
					btnStop.current.classList.remove('on');
				}}
			/>
			<FontAwesomeIcon
				icon={faPause}
				ref={btnStop}
				onClick={(e) => {
					swiper.autoplay.stop();
					btnStop.current.classList.add('on');
					btnStart.current.classList.remove('on');
				}}
			/>
		</nav>
	);
}

const Main = () => {
	const modal = useRef(null);
	const [Vids, setVids] = useState([]);
	const [Index, setIndex] = useState(0);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const fetchYoutube = async () => {
		try{
		const key = 'AIzaSyDa2SbLGSMQy9QKAMf-K6oWRxh2ejS4R7M'; //api 키
		const list = 'PLMafzyXZ12TP0yzcTdinxf49eUZVpFwYR'; //class 브라우저 상단값
		const num = 3;
		const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${list}&key=${key}&maxResults=${num}`;

		const result = await axios.get(url);
		setVids(result.data.items);
		setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
      console.error('유튜브 데이터를 불러오는데 실패했습니다:', err);
    }
	};
	useEffect(() => {
		fetchYoutube();
	}, []);


	if (loading) return (
    <Layout>
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
        <span className="sr-only">로딩중...</span>
      </div>
    </Layout>
  );

  if (error) return (
    <Layout>
      <div className="text-center text-red-500">
        오류가 발생했습니다: {error}
      </div>
    </Layout>
  );

	return (
		<>
			<Layout name={'main'}>
				<Swiper
					modules={[Autoplay, Pagination, Navigation]}
					loop={true}
					spaceBetween={30}
					slidesPerView={1}
					centeredSlides={true}
					autoplay={{ delay: 2000, disableOnInteraction: true }}
					pagination={{ clickable: true }}
					navigation={true}
					breakpoints={{
						1200: {
							slidesPerView: 3,
							spaceBetween: 50,
						},
					}}
				>
					<BtnRolling />
					{
						Vids.map((vid, idx) => {
							if (idx >= 5) return null;

							return (
								<SwiperSlide key={idx}>
									<div className='inner'>
										<div className='con'>
										<div
											className='pic'
											onClick={() => {
												modal.current.open();
												setIndex(idx);
											}}
										>
											<img src={vid.snippet.thumbnails.standard.url} alt={vid.snippet.title} />
										</div>
										<h2>
											{vid.snippet.title.length >= 30 ? vid.snippet.title.substr(0, 30) + '...' : vid.snippet.title}
										</h2>
										<p>
											{vid.snippet.description.length >= 100
												? vid.snippet.description.substr(0, 100) + '...'
												: vid.snippet.description}
										</p>
									</div>
									</div>
								</SwiperSlide>
							);
						})}
				</Swiper>
				<Accordion />
			</Layout>
			<Modal ref={modal}>
				<iframe
					title={Vids[Index]?.id}
					src={`https://www.youtube.com/embed/${Vids[Index]?.snippet.resourceId.videoId}`}
				></iframe>
			</Modal>
		</>
	);
};

export default Main;
# data.py

flower_course_data = {
    'yeouido': {
        'title': '여의도 한강공원',
            'location': '서울 영등포구',
            'description': '여의도 벚꽃축제는 서울에서 가장 유명한 봄 축제 중 하나로, 매년 4월에 여의도 한강공원에서 열립니다. 이 축제는 여의도 일대의 벚꽃이 만개하는 시기에 맞춰 다양한 문화 행사와 공연, 체험 활동이 함께 진행되어 많은 사람들이 방문합니다.',
            'images': [
                'img/river/river1.jpg',
                'img/river/river2.jpg',
                'img/river/river3.jpg',
            ],
           'map_url': '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.203048324027!2d126.9347112!3d37.5267106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c9f3b03c4b7ef%3A0xa4d8869ebf8d452c!2z7Jes7J2Y64-E7ZWc6rCV6rO17JuQ!5e0!3m2!1sko!2skr!4v1745905541431!5m2!1sko!2skr" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',  # 여의도 지도 iframe URL
            'info': {
                '위치': '서울특별시 영등포구 여의도동 1-1',
                '교통': '여의도역(5호선, 9호선)',
                '입장': '무료',
                '장소': '자전거 대여소, BBQ 공간, 유람선',
                '안내센터': '02-3780-0561',
                '홈페이지': 'https://hangang.seoul.go.kr/www/contents/669.do?mid=473',
        }
    },

    'seoul_forest': {
        'title': '서울숲',
            'location': '서울 성동구',
            'description': '서울숲은 서울의 대표적인 벚꽃 명소로, 봄마다 화려한 벚꽃이 공원 곳곳을 물들입니다 도심 한복판에서 만나는 자연 속에서 벚꽃을 즐길 수 있어, 많은 사람들이 찾는 인기 장소입니다. ',
            'images': [
                'img/seoul_forest/seoul_forest1.jpg',
                'img/seoul_forest/seoul_forest2.jpg',
                'img/seoul_forest/seoul_forest3.jpg',
                
            ],
            'map_url': 'https://www.google.com/maps/embed/v1/place?q=37.5436,127.0396&key=YOUR_GOOGLE_MAPS_API_KEY',
            'info': {
                '위치': '서울특별시 성동구 뚝섬로 273',
                '교통': '서울숲역(2호선, 분당선)',
                '입장': '무료',
                '장소': '숲속 산책로, 야경, 자전거 대여소',
                '안내센터': '02-460-2905',
                '홈페이지': 'https://www.seoulforest.or.kr',
        }
    },

    'seoul_children_park':{
        'title': '서울어린이대공원',
            'location': '서울 광진구',
            'description': '서울어린이대공원은 서울 광진구에 위치한 대규모 공원으로, 봄마다 벚꽃이 만개하여 많은 사람들이 방문하는 인기 있는 명소입니다.',
            'images': [
                'img/children_park/children_park1.jpg',
                'img/children_park/children_park2.jpg',
                'img/children_park/children_park3.jpg',
            ],
            'map_url': 'https://www.google.com/maps/embed/v1/place?q=37.5497,127.0823&key=YOUR_GOOGLE_MAPS_API_KEY',
            'info': {
                '위치': '서울특별시 광진구 능동로 216',
                '교통': '어린이대공원역(7호선)',
                '입장': '무료',
                '장소': '놀이기구, 동물원, 잔디밭, 공연장',
                '안내센터': '02-450-9311',
                '홈페이지': 'http://www.childrenpark.or.kr',
            }
        },

    'jungnangcheon': {
         'title': '중랑천 벚꽃길',
            'location': '서울 중랑구',
            'description': '중랑천 벚꽃길은 서울 동북부를 흐르는 중랑천을 따라 펼쳐지는 벚꽃 명소입니다. 매년 봄, 중랑천 주변의 벚꽃들이 만개하며, 하천을 따라 이어지는 벚꽃길은 환상적인 풍경을 선사합니다. ',
            'images': [
                'img/jungnangcheon/jungnangcheon1.jpg',
                'img/jungnangcheon/jungnangcheon2.jpg',
                'img/jungnangcheon/jungnangcheon3.jpg',
            ],
            'map_url': 'https://www.google.com/maps/embed/v1/place?q=37.6041,127.0945&key=YOUR_GOOGLE_MAPS_API_KEY',  # 중랑천 지도 iframe URL
            'info': {
                '위치': '서울특별시 중랑구',
                '교통': '중랑역(7호선), 상봉역(경의중앙선)',
                '입장': '무료',
                '장소': '산책로, 자전거 도로, 휴식 공간',
                '안내센터': '02-490-1270',
                '홈페이지': 'https://www.jungnang.go.kr',
            }
        },

    'Namsan_Tower': {
        'title': '남산서울타워',
            'location': '서울특별시 용산구 남산공원길 105',
            'description': '남산서울타워는 서울 중심부에 위치한 대표적인 관광 명소로, 서울 전경을 360도로 감상할 수 있는 전망대입니다. 특히 밤에는 도심의 야경과 어우러져 낭만적인 분위기를 자아내며 데이트 명소로도 유명합니다. ',
            'images': [
                'img/namsan_tower/Namsan_Tower1.jpg',
                'img/namsan_tower/Namsan_Tower2.jpg',
                'img/namsan_tower/Namsan_Tower3.jpg',
            ],
            'map_url': 'https://www.google.com/maps/embed/v1/place?q=37.6041,127.0945&key=YOUR_GOOGLE_MAPS_API_KEY',  # 중랑천 지도 iframe URL
            'info': {
                '위치': '서울특별시 용산구 남산공원길 105',
                '운영시간': '월~금 10:30~22:00 / 주말 10:00~23:00',
                '입장료': '성인 21,000원 / 청소년·어린이 16,000원',
                '교통': '명동역 도보 후 케이블카 / 순환버스 02, 03, 05번',
                '주요시설': '전망대, 사랑의 자물쇠 존, 회전 레스토랑, 포토존',
                '안내센터': '02-3455-9277',
                '홈페이지': 'https://www.seoultower.co.kr',
            }
    },

    'Dongdaemun Design Plaza': {
        'title': '동대문디자인플라자 (DDP)',
            'location': '서울특별시 중구 을지로 281',
            'description': '동대문디자인플라자(DDP)는 서울의 대표적인 랜드마크 중 하나로, 세계적인 건축가 자하 하디드가 설계한 미래형 복합 문화공간입니다. 다양한 전시, 패션쇼, 디자인 관련 행사들이 열리며, 독특한 곡선형 구조로 유명합니다.',
            'images': [
                'img/ddp/DDP1.jpg',
                'img/ddp/DDP2.jpg',
                'img/ddp/DDP3.jpg',
            ],
            'map_url': 'https://www.google.com/maps/embed/v1/place?q=동대문디자인플라자&key=YOUR_GOOGLE_MAPS_API_KEY',
            'info': {
                '위치': '서울특별시 중구 을지로 281',
                '운영시간': '매일 10:00~20:00 (시설별 상이)',
                '입장료': '무료 (특별전시 제외)',
                '교통': '2호선 동대문역사문화공원역 1번 출구 도보 5분',
                '주요시설': '디자인 전시관, 국제회의장, 디자인랩, 어울림광장',
                '안내센터': '02-2153-0000',
                '홈페이지': 'https://www.ddp.or.kr',
        }
    },

    'myeongdong': {
    'title': '명동',
            'location': '서울특별시 중구 명동길',
            'description': '명동은 서울의 대표적인 쇼핑 및 관광지로, 패션 매장, 뷰티 브랜드, 길거리 음식으로 유명합니다. 외국인 관광객들에게도 인기 있는 명소이며, 명동성당과 같은 역사적인 장소도 함께 즐길 수 있습니다.',
            'images': [
                'img/myeongdong/myeongdong1.jpg',
                'img/myeongdong/myeongdong2.jpg',
                'img/myeongdong/myeongdong3.jpg',
            ],
            'map_url': 'https://www.google.com/maps/embed/v1/place?q=명동,서울&key=YOUR_GOOGLE_MAPS_API_KEY',
            'info': {
                '위치': '서울특별시 중구 명동길',
                '운영시간': '상점마다 다름 (보통 10:00~22:00)',
                '입장료': '없음',
                '교통': '지하철 4호선 명동역 6번 출구 도보 1분',
                '주요시설': '명동거리, 명동성당, 명동예술극장, 쇼핑몰, 맛집거리',
                '안내센터': '02-1330 (관광안내센터)',
                '홈페이지': 'https://korean.visitseoul.net/shopping/Myeongdong_/1373',
            }
    }
}
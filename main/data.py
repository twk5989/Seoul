# data.py

flower_course_data = {
    'yeouido': {
        'title': '여의도 한강공원',
            'location': '서울 영등포구',
            'description': '여의도 벚꽃축제는 서울에서 가장 유명한 봄 축제 중 하나로, 매년 4월에 여의도 한강공원에서 열립니다.\n이 축제는 여의도 일대의 벚꽃이 만개하는 시기에 맞춰 다양한 문화 행사와 공연, 체험 활동이 함께 진행되어 많은 사람들이 방문합니다.',
            'images': [
                'img/river/river1.jpg',
                'img/river/river2.jpg',
                'img/river/river3.jpg',
            ],
           'map_url': 'https://www.google.com/maps/embed/v1/place?q=37.5266,126.9318&key=YOUR_GOOGLE_MAPS_API_KEY',  # 여의도 지도 iframe URL
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
            'description': '서울숲은 서울의 대표적인 벚꽃 명소로, 봄마다 화려한 벚꽃이 공원 곳곳을 물들입니다.\n 도심 한복판에서 만나는 자연 속에서 벚꽃을 즐길 수 있어, 많은 사람들이 찾는 인기 장소입니다. ',
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
            'description': '중랑천 벚꽃길은 서울 동북부를 흐르는 중랑천을 따라 펼쳐지는 벚꽃 명소입니다. \n매년 봄, 중랑천 주변의 벚꽃들이 만개하며, 하천을 따라 이어지는 벚꽃길은 환상적인 풍경을 선사합니다. ',
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

    'seoul_dreamforest': {
        'title': '북서울 꿈의숲',
            'location': '서울 강북구 월계로 173',
            'description': '서울 시내 4번째 규모의 대형 공원으로, 옛 놀이공원 드림랜드 부지에 2009년 조성되었습니다. \n 자연 숲과 다양한 테마구역(연못, 폭포, 대나무숲, 잔디광장 등)이 잘 어우러져 있습니다.',
            'images': [
                'img/seoul_dreamforest/seoul_dreamforest_1.jpg',
                'img/seoul_dreamforest/seoul_dreamforest_2.jpg',
                'img/seoul_dreamforest/seoul_dreamforest_3.jpg',
            ],
            'map_url': 'https://www.google.com/maps/embed/v1/place?q=37.6208,127.0419&key=YOUR_GOOGLE_MAPS_API_KEY',
            'info': {
                '위치': '서울 강북구 월계로 173',
                '운영시간': '24시간 운영',
                '입장료': '무료',
                '교통': '지하철 4호선 미아사거리역 1번 출구 버스 10분',
                '주요시설': '숲속 산책로',
                '안내센터': '02-2289-4000',
                '홈페이지': 'https://parks.seoul.go.kr/template/sub/dreamforest.do',
            }
        },
    'National_Cemetery': {
        'title': '국립서울현충원',
            'location': '서울 동작구 현충로 210',
            'description': '국립서울현충원은 순국선열과 호국영령을 추모하는 곳으로 봄에는 아름다운 벚꽃명소로 인기가 많은 곳입니다. \n 특히 다른 곳에서는 쉽게 볼 수 없는 수양벚꽃이 아래로 늘어진 모습이 더욱 운치를 더합니다.',
            'images': [
                'img/National_Cemetery/현충원_1.jpg',
                'img/National_Cemetery/현충원_2.jpg',
                'img/National_Cemetery/현충원_3.jpg',
            ],
            'map_url': 'https://www.google.com/maps/embed/v1/place?q=37.5008,126.9770&key=YOUR_GOOGLE_MAPS_API_KEY',
            'info': {
                '위치': '서울 동작구 현충로 210',
                '운영시간': '매일 06:00 ~ 18:00',
                '입장료': '무료',
                '교통': '동쟉역',
                '주요시설': '현충원',
                '안내센터': '1522-1555',
                '홈페이지': 'https://www.snmb.mil.kr/',
            }
        }
}
places_data= {
    'Namsan_Tower': {
        'title': '남산서울타워',
            'location': '서울특별시 용산구 남산공원길 105',
            'description': '남산서울타워는 서울 중심부에 위치한 대표적인 관광 명소로, 서울 전경을 360도로 감상할 수 있는 전망대입니다.\n특히 밤에는 도심의 야경과 어우러져 낭만적인 분위기를 자아내며 데이트 명소로도 유명합니다. ',
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
            'description': '동대문디자인플라자(DDP)는 서울의 대표적인 랜드마크 중 하나로, 세계적인 건축가 자하 하디드가 설계한 미래형 복합 문화공간입니다.\n다양한 전시, 패션쇼, 디자인 관련 행사들이 열리며, 독특한 곡선형 구조로 유명합니다.',
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
    },

    'lotteworld': {
        'title': '롯데월드',
            'location': '서울특별시 송파구 올림픽로 240',
            'description': '롯데월드는 서울 송파구에 위치한 대형 테마파크로, 실내외 놀이공원인 롯데월드 어드벤처와 매직아일랜드로 구성되어 있습니다.\n다양한 놀이기구, 퍼레이드, 아이스링크 등 가족과 연인 모두가 즐길 수 있는 복합 엔터테인먼트 공간입니다.',
            'images': [
                'img/lotteworld/lotteworld1.jpg',
                'img/lotteworld/lotteworld2.jpg',
                'img/lotteworld/lotteworld3.jpg',
            ],
            'map_url': 'https://www.google.com/maps/embed/v1/place?q=롯데월드,서울&key=YOUR_GOOGLE_MAPS_API_KEY',
            'info': {
                '위치': '서울특별시 송파구 올림픽로 240',
                '운영시간': '10:00~21:00 (변동 가능)',
                '입장료': '1일권 성인 62,000원 / 청소년 55,000원 / 어린이 50,000원',
                '교통': '지하철 2호선 잠실역 4번 출구 도보 3분',
                '주요시설': '어드벤처, 매직아일랜드, 아이스링크, 민속박물관, 쇼핑몰',
                '안내센터': '1661-2000 (롯데월드 고객센터)',
                '홈페이지': 'https://adventure.lotteworld.com',
            }
        },
    'olympic_park': {
        'title': '올림픽공원',
            'location': '서울 송파구 올림픽로 424',
            'description': '드넓은 잔디밭과 다양한 문화행사가 열리는 도심 속 휴식처입니다. \n 자전거를 타거나 산책을 하며 여유려운 시간을 보내실 수 있습니다.',
            'images': [
                'img/olympic/olympic_park_2.jpg',
                'img/olympic/olympic_park_3.jpg',
                'img/olympic/olympic_park_4.jpg',
            ],
            'map_url': 'https://www.google.com/maps/embed/v1/place?q=37.5163,127.1213&key=YOUR_GOOGLE_MAPS_API_KEY',
            'info': {
                '위치': '서울 송파구 올림픽로 424',
                '운영시간': '''도보나 자전거 출입 : 05:00 ~ 22:00 (광장지역은 24:00) \n
                차량 출입 : 06:00 ~ 22:00 \n
                차량 출차 : 동2문 - 00:00 ~ 24:00 / 북2문, 남2문 - 06:00 ~ 22:30''',
                '입장료': '무료',
                '교통': '한성백제역 2번출구',
                '주요시설': '공원',
                '안내센터': '02-2180-3516',
                '홈페이지': 'https://www.ksponco.or.kr/olympicpark/menu.es?mid=a20101000000',
            }
        },
    'jongro': {
        'title': '북촌 한옥마을',
            'location': '서울 종로구 계동길 37',
            'description': '도심 속에서 전통 한옥의 아름다움과 고즈넉한 분위기를 느낄 수 있는 곳입니다. \n 다양한 체험 프로그램도 운영하고 있습니다.',
            'images': [
                'img/jongro/jongro_1.jpg',
                'img/jongro/jongro_2.jpg',
                'img/jongro/jongro_3.jpg',
            ],
            'map_url': 'https://www.google.com/maps/embed/v1/place?q=37.5826,126.9830&key=YOUR_GOOGLE_MAPS_API_KEY',
            'info': {
                '위치': '서울 종로구 계동길 37',
                '운영시간': '매일 10:00 ~ 17:00',
                '입장료': '무료',
                '교통': '안국역',
                '주요시설': '한옥마을',
                '안내센터': '02-2148-4151',
                '홈페이지': 'https://hanok.seoul.go.kr/front/index.do',
            }
        },

}
create table customer (
	custid char(10) primary key,
    custname varchar(10) not null,
    addr char(10) not null,
    phone char(11),
    birth date
    );
desc customer;

-- INSERT 추가
insert into customer (custid, custname, addr, phone, birth) 
values ('lucky', '강해원', '미국 뉴욕', '01022223333', '2002-10-05');  
insert into customer (addr, custid, custname, phone, birth) 
values ('대한민국 부산', 'happy', '이지은',  '01022223333', '2002-10-05'); 
insert into customer
values ('apple', '이지은', '대한민국 광주',  '01022223333', '2002-10-05'); 

-- 여러 튜플 동시에 추가
insert into customer
values ('banana', '윤지성', '대한민국 광주',  '01022223333', '2002-10-05'),
('orange', '박은빈', '대한민국 광주',  '01022223333', '2002-10-05'),
('kiwi', '송강', '대한민국 광주',  '01022223333', '2002-10-05'),
('grape', '김유정', '대한민국 광주',  '01022223333', '2002-10-05'); 

INSERT INTO customer VALUES('bunny', '강해린', '대한민국 서울', '01012341234', '2000-02-23');
INSERT INTO customer VALUES('hello', '이지민', '대한민국 포항', '01022221234', '1999-08-08');
INSERT INTO customer VALUES('jisu', '최지수', '미국 뉴욕', '01050005000', '1990-12-25');
INSERT INTO customer VALUES('imminji01', '강민지', '영국 런던', '01060001000', '1995-01-11');
INSERT INTO customer VALUES('lalala', '홍수지', '미국 로스앤젤레스', '01010109090', '2007-05-16');
INSERT INTO customer VALUES('jjjeee', '홍은정', '대한민국 서울', '01099991111', '2004-08-17');
INSERT INTO customer VALUES('wow123', '이민혁', '일본 삿포로', '01011223344', '1994-05-31');
INSERT INTO customer VALUES('minjipark', '박민지', '프랑스 파리', '01088776655', '1998-04-08');
INSERT INTO customer VALUES('jy9987', '강지연', '일본 삿포로', '01012312323', '1996-09-01');

-- SELECT 조회
select * from customer;
select custid from customer;

-- < WHERE 조건 > 
-- 비교: =, <>, <, <=, >, >=
-- 범위: BETWEEN
-- 집합: IN, NOT IN
-- 패턴: LIKE
-- NULL: IS NULL, IS NOT NULL
-- 복합 조건: AND, OR, NOT

-- 비교
-- 고객 이름이 강해린인 고객의 생일 검색
select birth from customer where custname='강해린';
-- 고객 이름이 강해린이 아닌 고객의 생일 검색
select birth from customer where custname!='강해린';
-- 사전순으로 박민지보다 뒤에 위치한 고객의 모든 정보 검색
select * from customer where custname > '박민지';

-- 범위
-- 1995년 이상 2000년 이하 출생 고객 검색
select * from customer where birth between '1995-01-01' and '2000-12-31';
select * from customer where birth >= '1995-01-01' and birth <= '2000-12-31';

-- 집합
-- 주소가 서울 혹은 런던인 고객 검색
select * from customer where addr in ('대한민국 서울', '영국 런던');
select * from customer where addr = '대한민국 서울' or addr = '영국 런던';
-- 주소가 서울 혹은 런던이 아닌 고객 검색
select * from customer where addr not in ('대한민국 서울', '영국 런던');

-- 패턴
-- 주소가 '미국 로스앤젤레스'인 고객을 검색
select * from customer where addr like '미국 로스앤젤레스';

-- 주소가 '미국'이 포함되어 있는 고객 검색
-- %: 0개 이상의 문자열
select * from customer where addr like '미국%';

-- 고객 이름에 두번째 글자가 '지'인 고객 검색
-- _: 임의의 한글자(하나의) 문자를 의미
select * from customer where custname like '_지%';
select * from customer where custname like '_지'; -- 형지

-- 고객 이름에 세번째 글자가 '수'인 고객 검색
select * from customer where custname like '__수%';
select * from customer where custname like '%수'; -- 이름이 몇자든, 마지막 글자가 '수'

-- 복합 조건 (AND, OR, NOT)
-- 주소지가 대한민국이고, 2000년생 이후 출생 고객 검색
select * from customer where addr like '대한민국%' and birth >= '2000-01-01';
-- 주소지가 미국이거나 영국인 고객 검색
select * from customer where addr like '미국%' or addr like '영국%';
-- 휴대폰 번호 마지막 자리가 4가 아닌 고객 검색
select * from customer where phone not like '%4';

-- Group by 주의 사항
-- select 절에서 group by 에서 사용한 속성과 집계함수만 사용 가능

/*
where vs having

having
- 그룹에 대해서 필터링 (group by 와 함께 쓰임)
- group by 보다 뒤에 위치

where
- 각각의 행을 필터링
- group by 보다 앞에 위치
*/
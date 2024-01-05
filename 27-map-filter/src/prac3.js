import React, { useState } from 'react';

function Prac3() {
  const [writer, setWriter] = useState('');
  const [subject, setSubject] = useState('');
  const [result, setResult] = useState([]);
  const [keyword, setKeyword] = useState('');
  const [searchvalue, setSearchvalue] = useState('writer');
  const [filterdata, setFilterdata] = useState([]);

  const addwriter = (e) => {
    setWriter(e);
  };

  const addsubject = (e) => {
    setSubject(e);
  };

  const addpost = () => {
    setResult([...result, [subject, writer]]);
  };

  const search = (e) => {
    setKeyword(e);
  };

  const setSearchVal = (e) => {
    setSearchvalue(e);
  };

  const searchData = () => {
    const resultdata = result.filter((data) => {
      console.log(data);
      if (searchvalue === 'writer') {
        console.log(searchvalue);
        if (data[1].includes(keyword)) {
          return data;
        }
      } else {
        console.log(searchvalue);
        if (data[0].includes(keyword)) {
          return data;
        }
      }
    });
    console.log(resultdata);
    setFilterdata(resultdata);
  };

  return (
    <>
      <div
        style={{
          border: '1px solid black',
          margin: '5px',
          padding: '10px',
          display: 'flex',
          gap: '10px',
        }}
      >
        <label>
          작성자 :
          <input
            type="text"
            placeholder="작성자"
            onChange={(e) => {
              addwriter(e.target.value);
            }}
          />
        </label>

        <label>
          제목 :
          <input
            type="text"
            onChange={(e) => {
              addsubject(e.target.value);
            }}
          />
        </label>

        <button onClick={addpost}>작성</button>
      </div>

      <div
        style={{
          margin: '5px',
          padding: '10px',
          display: 'flex',
          gap: '10px',
        }}
      >
        <label>
          <select
            onChange={(e) => {
              setSearchVal(e.target.value);
            }}
          >
            <option value="writer">작성자</option>
            <option value="subject">제목</option>
          </select>
        </label>
        <label>
          <input
            type="text"
            onChange={(e) => {
              search(e.target.value);
            }}
          />
        </label>
        <button onClick={searchData}>검색</button>
      </div>
      <table
        style={{
          borderCollapse: 'collapse',
          border: '2px solid black',
          width: '80%',
          marginLeft: '10px',
        }}
      >
        <thead>
          <tr>
            <th
              style={{
                border: '2px solid black',
                padding: '1px',
              }}
            >
              번호
            </th>
            <th
              style={{
                border: '2px solid black',
                padding: '3px',
              }}
            >
              제목
            </th>
            <th style={{ border: '2px solid black', padding: '8px' }}>
              작성자
            </th>
          </tr>
        </thead>
        <tbody>
          {result.map((item, idx) => (
            <tr key={idx}>
              <td
                style={{
                  border: '2px solid black',
                  padding: '3px',
                }}
              >
                {idx + 1}
              </td>
              <td
                style={{
                  border: '2px solid black',
                  padding: '3px',
                }}
              >
                {item[0]}
              </td>
              <td
                style={{
                  border: '2px solid black',
                  padding: '3px',
                }}
              >
                {item[1]}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      {filterdata.length == 0 ? (
        <h4>검색 결과가 없습니다.</h4>
      ) : (
        <table
          style={{
            borderCollapse: 'collapse',
            border: '2px solid black',
            width: '80%',
            marginLeft: '10px',
          }}
        >
          <thead>
            <tr>
              <th
                style={{
                  border: '2px solid black',
                  padding: '1px',
                }}
              >
                번호
              </th>
              <th
                style={{
                  border: '2px solid black',
                  padding: '3px',
                }}
              >
                제목
              </th>
              <th style={{ border: '2px solid black', padding: '8px' }}>
                작성자
              </th>
            </tr>
          </thead>
          <tbody>
            {filterdata.map((item, idx) => (
              <tr key={idx}>
                <td
                  style={{
                    border: '2px solid black',
                    padding: '3px',
                  }}
                >
                  {idx + 1}
                </td>
                <td
                  style={{
                    border: '2px solid black',
                    padding: '3px',
                  }}
                >
                  {item[0]}
                </td>
                <td
                  style={{
                    border: '2px solid black',
                    padding: '3px',
                  }}
                >
                  {item[1]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}

export default Prac3;

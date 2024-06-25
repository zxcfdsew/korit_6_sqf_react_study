import { useEffect, useRef, useState } from "react";
import "./style.css";
import Swal from "sweetalert2";

function DataTableHeader({ mode, setMode, products, setProducts, setDeleting, editProductId }) {
    const emptyProduct = {
        id: "",
        productName: "",
        size: "",
        color: "",
        price: ""
    }

    const inputRefs = {
        productName: useRef(),
        size: useRef(),
        color: useRef(),
        price: useRef()
    }

    const [ inputData, setInputData ] = useState({ ...emptyProduct });

    useEffect(() => {
        // 값이 하나만 들어올거기 때문에 비구조할당으로 값을 받아옴
        const [ product ] = products.filter(product => product.id === editProductId);
        setInputData(!product ? { ...emptyProduct } : { ...product });
    }, [editProductId]);

    const handleInputChange = (e) => {
        // 이렇게 하면 객체 리턴 (소괄호로 묶으면 객체 리턴)
        setInputData(inputData => ({
            ...inputData,
            [e.target.name]: e.target.value
        }));
        // 여기서 중괄호는 함수의 몸체
        // setInputData(inputData => {

        // })
    }

    const handleInputKeyDown = (e) => {
        if (e.keyCode === 13) {
            if(e.target.name === "productName") {
                inputRefs.size.current.focus();
            }
            if(e.target.name === "size") {
                inputRefs.color.current.focus();
            }
            if(e.target.name === "color") {
                inputRefs.price.current.focus();
            }
            if(e.target.name === "price") {
                handleSubmitClick();
                inputRefs.productName.current.focus();
            }
        }
    }

    const handleChangeModeClick = (e) => {
        setMode(parseInt(e.target.value));
    }

    const handleSubmitClick = () => {
        if(mode === 1) {
            setProducts(products => {
                const productIds = products.map(product => product.id);
                const maxId = productIds.length === 0 ? 0 : Math.max.apply(null, productIds);
                return [ ...products, { ...inputData, id: maxId + 1} ];
            });
            Swal.fire({
                title: "상품 정보 추가 완료",
                icon: "success",
                position: "top-end",
                showConfirmButton: false,
                timer: 1000
            });
            resetMode();
        }
        if(mode === 2) {
            Swal.fire({
                title: "상품 정보 수정",
                showCancelButton: true,
                confirmButtonText: "확인",
                cancelButtonText: "취소" 
            }).then(result => {
                if(result.isConfirmed) {
                    setProducts(products => [ 
                        ...products.map(product => {
                            if(product.id === editProductId) {
                                const { id, ...rest } = inputData;
                                return {
                                    ...product,
                                    ...rest
                                }
                            }
                            return product;
                        })
                    ]);
                    resetMode();
                }
                return 10;
            }).then(num => console.log(num));
        }
        if(mode === 3) {
            Swal.fire({
                title: "상품 정보 삭제",
                text: "정말로 삭제 하시겠습니까?",
                showCancelButton: true,
                confirmButtonText: "삭제",
                confirmButtonColor: "red",
                cancelButtonText: "취소"
            }).then(result => {
                if(result.isConfirmed) {
                    setDeleting(true);
                }
            });
        }
    }

    const handleCancelClick = () => {
        resetMode();
    }

    const resetMode = () => {
        setMode(0);
        setInputData({ ...emptyProduct });
    }

    return ( 
        <header className="table-header">
            <div className="input-group">
                <input 
                    type="text" 
                    disabled={mode === 0 || mode === 3}
                    name="productName"
                    value={inputData.productName}
                    placeholder="상품명" 
                    onChange={handleInputChange}
                    onKeyDown={handleInputKeyDown}
                    ref={inputRefs.productName}
                    autoFocus
                />
                <input 
                    type="text" 
                    disabled={mode === 0 || mode === 3} 
                    name="size"
                    value={inputData.size}
                    placeholder="사이즈" 
                    onChange={handleInputChange}
                    onKeyDown={handleInputKeyDown}
                    ref={inputRefs.size}
                />
                <input 
                    type="text" 
                    disabled={mode === 0 || mode === 3} 
                    name="color"
                    value={inputData.color}
                    placeholder="색상" 
                    onChange={handleInputChange}
                    onKeyDown={handleInputKeyDown}
                    ref={inputRefs.color}
                />
                <input 
                    type="text" 
                    disabled={mode === 0 || mode === 3} 
                    name="price"
                    value={inputData.price}
                    placeholder="가격" 
                    onChange={handleInputChange}
                    onKeyDown={handleInputKeyDown}
                    ref={inputRefs.price}
                />
            </div>
            <div>
                {
                    !mode && (
                        <div className="button-group" >
                            <button onClick={handleChangeModeClick} value={1} >추가</button>
                            <button onClick={handleChangeModeClick} value={2} >수정</button>
                            <button onClick={handleChangeModeClick} value={3} >삭제</button>
                        </div>
                    )
                }
                {
                    !!mode && (
                        <div className="button-group" >
                            <button onClick={handleSubmitClick} >확인</button>
                            <button onClick={handleCancelClick} >취소</button>
                        </div>
                    )
                }
            </div>
        </header>
    );
}

export default DataTableHeader;
import Link from "next/link";
import Image from "next/image";
import stripimg1 from '@/asset/images/stripimg1.png';
import stripimg2 from '@/asset/images/stripimg2.png';
import stripimg3 from '@/asset/images/stripimg3.png';


const StripBox = () => {
    return(
        <>
            <div className="stripWrap">
                <div className="container">
                    <div className="stripSec">
                        <div className="stripHead">
                            <h3>You might like these as well </h3>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="stripImg">
                                    <div className="stripBox">
                                        <Image src={stripimg1} alt="stripimg1" width={625} height={200}></Image>
                                    </div>
                                    <div className="stripText">
                                        <span>Elcom Power Strip 6 Sockets</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="stripImg">
                                    <div className="stripBox">
                                        <Image src={stripimg2} alt="stripimg2" width={351} height={234}></Image>
                                    </div>
                                    <div className="stripText">
                                        <span>Elcom Power Strip 5 Sockets</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="stripImg">
                                    <div className="stripBox">
                                        <Image src={stripimg3} alt="stripimg3" width={456} height={304}></Image>
                                    </div>
                                    <div className="stripText">
                                        <span>Elcom Power Strip 5 Sockets</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StripBox;
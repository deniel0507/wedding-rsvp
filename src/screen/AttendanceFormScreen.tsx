import { MainLayout } from "../component/MainLayout";
import { Form } from "../component/Form";
import { CheckBox } from "../component/CheckBox";
import { SelectBox } from "../component/SelectBox";


export const AttendanceFormScreen = () => {
    return(
        <MainLayout>
            <div className="w-full flex-col items-center justify-center">
                <div className="flex items-center justify-center">
                    <p className="text-2xl w-[80%]">Attendance</p>
                </div>
                <div className="flex items-center justify-center mt-8">
                    <Form label="Name" placeHolder="Insert your name"/>
                </div>
                <div className="flex items-center justify-center mt-8">
                    <div className="w-[80%]">
                        <p>Will you attend the wedding?</p>
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <div className="w-[80%] flex gap-4">
                        <CheckBox checkboxLabel="Yes"/>
                        <CheckBox checkboxLabel="No"/>
                    </div>
                </div>
                <div className="flex items-center justify-center mt-8">
                    <SelectBox />
                </div>
                <div>
                    <button>submit</button>
                </div>
            </div>
        </MainLayout>
    );
}
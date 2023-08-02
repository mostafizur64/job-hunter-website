import React from 'react';

const Footer = () => {
    return (
        <div className='bg-black text-white mt-32 p-32'>
            <div class="grid gird-cols-1 lg:grid-cols-6 gap-12">
                <div class="col-span-2 px-10">
                    <h1 class="text-3xl font-semibold">Job hunter</h1>
                    <p class="mt-3"> amet consectetur adipisicing elit. Fuga labore voluptas officia cum vitae. Nihil, animi? Laudantium eligendi perspiciatis nisi adipisci dolores earum delectus inventore?</p>
                </div>
                <div class=" space-y-3">
                    <h2 class="text-2xl">Compnay</h2>
                    <p>about us</p>
                    <p>work</p>
                    <p>Latest new</p>
                    <p>carear</p>
                </div>
                <div class=" space-y-3">
                    <h2 class="text-2xl">Product</h2>
                    <p>prototype</p>
                    <p>Plans and pricing</p>
                    <p>Customers</p>
                    <p>integraters</p>
                </div>
                <div class=" space-y-3">
                    <h2 class="text-2xl">Support</h2>
                    <p>Help desk</p>
                    <p>sels</p>
                    <p>Becomes a partner</p>
                    <p>Devlopers</p>
                </div>
                <div class="space-y-3">
                    <h2 class="text-2xl">Contanct </h2>
                    <p>merul badda dit</p>
                    <p>++0017616574</p>
                </div>

            </div>
        </div>
    );
};

export default Footer;